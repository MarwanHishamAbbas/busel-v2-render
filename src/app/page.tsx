import ContactBanner from "@/components/common/ContactBanner"
import Categories from "@/components/home/Category/Categories"
import HeroCTA from "@/components/home/HeroCTA"
import MostPopular from "@/components/home/MostPopular"
import Showcase from "@/components/home/Showcase"
import { FC } from "react"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main>
      <HeroCTA />
      <Categories />
      <MostPopular />
      <Showcase />
      <ContactBanner />
    </main>
  )
}

export default HomePage
