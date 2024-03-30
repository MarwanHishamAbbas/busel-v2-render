import Link from "next/link"
import { buttonVariants } from "../ui/button"

const Footer = ({}) => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mb-4">
        <Link href="/" className="text-3xl lg:text-5xl font-bold">
          Busel
        </Link>
      </div>
      <div className="container flex items-center justify-between ">
        <p>©2024</p>
        <Link
          href="/about"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Terms Of Service
        </Link>
      </div>
    </footer>
  )
}

export default Footer
