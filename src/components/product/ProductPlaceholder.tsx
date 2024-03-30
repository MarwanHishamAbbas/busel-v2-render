"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"

const ProductPlaceholder = () => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="relative">
          <Skeleton className=" w-full h-[250px]" />
          <span className="absolute top-4 right-4 bg-background px-4 py-2 rounded-3xl font-medium">
            <Skeleton className="w-full" />
          </span>
        </div>
        <CardTitle className="font-medium">
          <Skeleton className="w-1/2 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="w-3/4 h-2" />
        <Skeleton className="w-3/5 h-2" />
        <Skeleton className="w-1/2 h-2" />
      </CardContent>
      <CardFooter className="gap-4 flex-col xl:flex-row">
        <Button variant="outline" size="lg" className="w-full">
          View Product
        </Button>
        <Button variant="outline" size="lg" className="w-full  ">
          View Demo
          <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductPlaceholder
