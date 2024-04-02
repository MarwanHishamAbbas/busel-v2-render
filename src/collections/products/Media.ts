import { AfterChangeHook } from "payload/dist/collections/config/types"
import { type Media, User } from "@/payload-types"
import { Access, CollectionConfig } from "payload/types"
import { put } from "@vercel/blob"

const afterChangeHook: AfterChangeHook<Media> = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  // const blob = await put(doc.filename as string, doc.id, {
  //   access: "public",
  // })
  console.log(doc)
  return doc
}

const isAdminOrHasAccessToImages =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined

    if (!user) return false
    if (user.role === "admin") return true

    return {
      user: {
        equals: req.user.id,
      },
    }
  }

export const Medias: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id }
      },
    ],
    afterChange: [afterChangeHook],
  },
  access: {
    read: async ({ req }) => {
      const referer = req.headers.referer

      if (!req.user || !referer?.includes("sell")) {
        return true
      }

      return await isAdminOrHasAccessToImages()({ req })
    },
    delete: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    disableLocalStorage: true,

    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
}
