import ProductActions from "@/components/product/ProductActions"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getPayloadClient } from "@/get-payload"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ProductDetailsPage {
  params: {
    productId: string
  }
}

const Page: FC<ProductDetailsPage> = async ({ params }) => {
  // const { addItem } = useCart()
  const payload = await getPayloadClient()
  const { docs: products } = await payload.find({
    collection: "products",
    where: {
      id: { equals: params.productId },
    },
  })
  const [product] = products

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean)
  return (
    <main>
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Image
            src={validUrls[0] as string}
            priority
            width={600}
            height={600}
            alt="Product"
            className="rounded-2xl lg:h-[600px] w-full object-cover"
          />
          <Card className="bg-foreground text-background">
            <CardContent className="flex flex-col justify-between h-full py-12 gap-5">
              <div className="space-y-6">
                <h1 className="text-3xl font-medium">{product.name}</h1>
                <CardDescription className="text-lg">
                  {product.description}
                </CardDescription>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-4xl font-medium">${product.price}</h3>
                <ProductActions product={product} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container pt-0">
        <article className="text-lg opacity-50">{product.overview}</article>
      </section>
    </main>
  )
}

export default Page
