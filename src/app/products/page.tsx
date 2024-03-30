"use client"

import ProductsList from "@/components/product/ProductsList"
import SearchFilter from "@/components/product/SearchFilter"
import { useSearchParams } from "next/navigation"

const Products = ({}) => {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  return (
    <section className="container space-y-12">
      {/* TODO: Products Filter  */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-medium ">
          Browse Stunning Products
        </h1>
        <p className="md:text-base opacity-50">
          A collection of high-performing and well-designed Framer templates to
          set up your website
        </p>
        <SearchFilter />
      </div>
      <ProductsList
        query={{ category: category ?? undefined, limit: 10, sort: "asc" }}
      />
    </section>
  )
}

export default Products
