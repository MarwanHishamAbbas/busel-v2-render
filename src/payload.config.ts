import path from "path"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { slateEditor } from "@payloadcms/richtext-slate"
import { buildConfig } from "payload/config"
import { Products } from "./collections/products/Products"
import { Media } from "./collections/products/Media"
import { ProductFile } from "./collections/products/ProductFile"
import { Orders } from "./collections/Orders"
import { Users } from "./collections/Users"

export default buildConfig({
  collections: [Users, Products, Media, ProductFile, Orders],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
})
