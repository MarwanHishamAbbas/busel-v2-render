"use client"

import { FC } from "react"
import { Button } from "../ui/button"
import { useRouter, useSearchParams } from "next/navigation"

interface SearchFilterProps {}

const SearchFilter: FC<SearchFilterProps> = ({}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryQuery = searchParams.get("category")
  return (
    <nav className="space-x-2">
      <Button
        variant={categoryQuery ? "outline" : "default"}
        onClick={() => router.push(`/products`)}
      >
        All
      </Button>
      {[, "UI", "Icons", "Templates"].map((category, idx) => (
        <Button
          variant={category === categoryQuery ? "default" : "outline"}
          key={idx}
          onClick={() => router.push(`/products?category=${category}`)}
        >
          {category}
        </Button>
      ))}
    </nav>
  )
}

export default SearchFilter
