"use client"

import { FC, useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"

import { Product } from "@/payload-types"
import ProductPlaceholder from "./ProductPlaceholder"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  product: Product | null
  index: number
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { addItem } = useCart()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductPlaceholder />
  const validURLs = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[]
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="space-y-4">
        <div className="relative">
          <Image
            src={validURLs[0]}
            priority
            width={500}
            height={500}
            alt="Product"
            className="rounded-2xl h-64 object-cover"
          />
          <span className="absolute top-4 right-4 bg-background px-4 py-2 rounded-3xl font-medium">
            ${product?.price}
          </span>
        </div>
        <CardTitle className="font-medium">{product?.name}</CardTitle>
      </CardHeader>
      <div>
        <CardContent>
          <p className="opacity-40">{product?.description}</p>
        </CardContent>
        <CardFooter className="gap-4 flex-col xl:flex-row">
          <Link
            href={`/products/${product.id}`}
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "w-full",
            })}
          >
            View Product
          </Link>

          <Button
            onClick={() => addItem(product)}
            size="lg"
            variant="outline"
            className="w-full"
          >
            Add to Cart
            <ShoppingCart className="ml-2 w-5 h-5" />
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default ProductCard
