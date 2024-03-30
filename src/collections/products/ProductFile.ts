import { User } from "../../payload-types"
import { BeforeChangeHook } from "payload/dist/collections/config/types"
import { Access, CollectionConfig } from "payload/types"

// setting the user to it's own Product File
const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null
  return { ...data, user: user?.id }
}

// Admin and the user who buys the product only have access to the Product file (make sense)
const yourOwnOrPurchased: Access = async ({ req }) => {
  const user = req.user as User | null
  // You can't read this file
  if (!user) return false

  // you can read this file cause I'm ADMIN
  if (user?.role === "admin") return true

  //  If I own the file
  const { docs: products } = await req.payload.find({
    collection: "products",
    // Get the first layer of the data (we want the id)
    depth: 0,
    where: {
      user: {
        equals: user.id,
      },
    },
  })

  const ownProductFileIds = products.map((prod) => prod.product_files).flat()
  const { docs: orders } = await req.payload.find({
    collection: "orders",
    // Join some tables together => fetch user and their orders
    depth: 2,
    where: {
      user: {
        equals: user.id,
      },
    },
  })
  const purchasedProductFilesIds = orders
    .map((order) => {
      return order.products.map((product) => {
        if (typeof product === "string")
          return req.payload.logger.error(
            "Search depth not sufficient to find purchased file IDs"
          )
        return typeof product.product_files === "string"
          ? product.product_files
          : product.product_files.id
      })
      // Simply removing any undifined values, then flat the array
    })
    .filter(Boolean)
    .flat()
  return {
    id: { in: [...ownProductFileIds, ...purchasedProductFilesIds] },
  }
}
export const ProductFile: CollectionConfig = {
  slug: "product_files",
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  hooks: {
    beforeChange: [addUser],
  },
  upload: {
    staticURL: "/product_files",
    staticDir: "product_files",
    mimeTypes: ["image/*", "font/*", "application/postscripts"],
  },
  //   very important
  access: {
    read: yourOwnOrPurchased,
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      admin: {
        condition: () => false,
      },
      hasMany: false,
      required: true,
    },
  ],
}
