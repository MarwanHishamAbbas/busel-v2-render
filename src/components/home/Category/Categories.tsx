import { CATEGORIES } from "@/data/categories"
import CategoryCard from "./CategoryCard"
import Image from "next/image"

const Categories = ({}) => {
  return (
    <section>
      <section className="bg-primary text-primary-foreground container rounded-3xl relative">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium ">
            Browse by Categories
          </h1>
          <p className="md:text-base opacity-50">
            Browse through some of my Most Popular Products!
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:container">
          {CATEGORIES.map((category, idx) => (
            <CategoryCard category={category} key={idx} />
          ))}
        </section>

        <Image
          width={700}
          height={700}
          src="/line-waves.svg"
          alt="SVG waves"
          className="absolute top-0 right-0 rotate-180"
        />
      </section>
    </section>
  )
}

export default Categories
