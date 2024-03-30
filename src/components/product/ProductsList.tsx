"use client"

import { FC } from "react"
import ProductCard from "./ProductCard"
import { trpc } from "@/trpc/client"
import { TQueryValidator } from "@/lib/validators/query-validator"
import { Product } from "@/payload-types"

interface ProductsListProps {
  query: TQueryValidator
}

const ProductsList: FC<ProductsListProps> = ({ query }) => {
  const { limit } = query
  const { data: queryResult, isLoading } =
    trpc.products.getInfiniteProducts.useInfiniteQuery(
      {
        limit: limit ?? 4,

        query,
      },
      { getNextPageParam: (lastPage) => lastPage.nextPage }
    )

  const products = queryResult?.pages.flatMap((page) => page.items)
  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (isLoading) {
    // Just fill an array with number of limit that we should recieve
    map = new Array<null>(query.limit ?? 3).fill(null)
  }
  console.log(products?.map((products) => products))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {map.map((product, idx) => (
        <ProductCard index={idx} key={idx} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
