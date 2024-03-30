import { FC } from "react"
import ProductsList from "../product/ProductsList"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

interface MostPopularProps {}

const MostPopular: FC<MostPopularProps> = ({}) => {
  return (
    <section className="container space-y-12 text-center pt-0">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-medium ">
          Most Popular Downloads
        </h1>
        <p className="md:text-base opacity-50">
          Browse through some of my Most Popular Products!
        </p>
      </div>
      <ProductsList query={{ limit: 3, sort: "asc" }} />
      <Link
        href="/products"
        className={buttonVariants({
          size: "lg",
          variant: "outline",
        })}
      >
        Browse All Products
      </Link>
    </section>
  )
}

export default MostPopular
