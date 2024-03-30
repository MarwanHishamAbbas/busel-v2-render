"use client"

import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

const NotFound = ({}) => {
  const router = useRouter()
  return (
    <section className="h-[90vh] ">
      <section className="bg-primary text-primary-foreground container rounded-3xl h-full grid place-content-center">
        <div className="text-center space-y-3 mx-auto">
          <Image
            width={300}
            height={300}
            src="/404.svg"
            alt="Error"
            className="mx-auto"
          />
          <h1 className="text-9xl font-medium ">404</h1>
          <p className="md:text-2xl opacity-50 mx-auto">
            Well, something is not right here.
          </p>
          <Button variant="secondary" size="lg" onClick={() => router.back()}>
            <ArrowLeft />
            Go Back
          </Button>
        </div>
      </section>
    </section>
  )
}

export default NotFound
