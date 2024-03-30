"use client"

import { useCart } from "@/hooks/use-cart"
import { Product } from "@/payload-types"
import { FC } from "react"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link"

interface ProductActionsProps {
  product: Product
}

const ProductActions: FC<ProductActionsProps> = ({ product }) => {
  const { addItem } = useCart()
  return (
    <div className="flex flex-col gap-2">
      <Button variant="secondary" size="lg" onClick={() => addItem(product)}>
        Get Now
      </Button>
      <Link
        target="_blank"
        href={product.preview!}
        className={buttonVariants({
          variant: "outline",
          size: "lg",
        })}
      >
        Preview
      </Link>
    </div>
  )
}

export default ProductActions
