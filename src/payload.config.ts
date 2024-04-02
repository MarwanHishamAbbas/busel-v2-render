import path from "path"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { slateEditor } from "@payloadcms/richtext-slate"
import { buildConfig } from "payload/config"
import { Products } from "./collections/products/Products"
import { Medias } from "./collections/products/Media"
import { ProductFile } from "./collections/products/ProductFile"
import { Orders } from "./collections/Orders"
import { Users } from "./collections/Users"

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Medias, ProductFile, Orders],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  routes: {
    admin: "/sell",
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
})
