import { CATEGORIES } from "@/data/categories"
import { FC } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
interface CategoryCardProps {
  category: (typeof CATEGORIES)[number]
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="bg-primary text-primary-foreground p-4 rounded-full w-fit">
          {category.icon}
        </div>
        <CardTitle className="font-medium text-3xl">
          {category?.title}
        </CardTitle>
        <p className="opacity-40">{category?.description}</p>
      </CardHeader>
    </Card>
  )
}

export default CategoryCard
