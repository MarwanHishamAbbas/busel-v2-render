import { Poppins } from "next/font/google"
import "./globals.css"
import Providers from "@/components/provider/Providers"
import Navbar from "@/components/layout/navbar/Navbar"
import { Toaster } from "sonner"
import { Metadata } from "next"
import Footer from "@/components/layout/Footer"
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Busel | Homepage",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <main className="mt-20">{children}</main>
          <Footer />
        </Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
