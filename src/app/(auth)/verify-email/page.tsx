import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { FC } from "react"

interface VerifyEmailPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const VerifyEmailPage: FC<VerifyEmailPageProps> = ({ searchParams }) => {
  const token = searchParams.token
  const toEmail = searchParams.to
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex h-full flex-col items-center justify-center">
          <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
          <Link
            className={buttonVariants({ className: "mt-4" })}
            href="/sign-in"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailPage
