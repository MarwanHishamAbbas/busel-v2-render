import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { ArrowRight } from "lucide-react"

const ContactBanner = ({}) => {
  return (
    <section className="pt-0">
      <section className="bg-primary text-primary-foreground container py-10 rounded-3xl flex flex-col md:flex-row items-center justify-between">
        <div className=" space-y-4 ">
          <h1 className="text-4xl md:text-5xl font-medium ">
            Still Need Help?
          </h1>
          <p className="md:text-base opacity-50 ">
            Can&apos;t find the answer here? Message us for help!
          </p>
        </div>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Shoot Us A Message!
          <ArrowRight className="ml-2" />
        </Link>
      </section>
    </section>
  )
}

export default ContactBanner
