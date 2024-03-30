import Link from "next/link"
import { buttonVariants } from "../../ui/button"
import { ArrowRight } from "lucide-react"
import { NAV_LINKS } from "@/data/links"
import { NavMenu } from "./NavMenu"
import { getServerSideUser } from "@/lib/payload-utils"
import { cookies } from "next/headers"
import UserAccountNav from "./UserAccountNav"
import Cart from "@/components/cart/Cart"

const Navbar = async ({}) => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)
  return (
    <header className="bg-background h-20 flex items-center fixed left-0 top-0 right-0 z-50 border-b-2 shadow-md">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="text-3xl lg:text-5xl font-bold">
          Busel
        </Link>
        <ul className="hidden lg:block space-x-4 ">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3 lg:gap-7">
          <Cart />
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({
                size: "lg",
                className: "hidden lg:flex",
              })}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
          <div className="lg:hidden">
            <NavMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
