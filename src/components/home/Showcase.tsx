import { ShoppingBag } from "lucide-react"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link"

const Showcase = ({}) => {
  return (
    <section className="pt-0">
      <section className="bg-primary text-primary-foreground container rounded-3xl lg:py-32">
        <div className="text-center space-y-4 lg:w-3/4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium ">
            Products are Thoughtfully Created with User Experience in Mind
          </h1>
          <p className="md:text-base opacity-50 lg:w-3/4 mx-auto">
            We are passionate about creating high-quality Framer templates that
            are visually appealing, highly functional, and easy to use.
          </p>
          <Link
            href="/products"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            <ShoppingBag className="mr-2" />
            Expolore Products
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Showcase
