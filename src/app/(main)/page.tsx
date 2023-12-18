import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SimpleSlider from "@modules/home/components/slider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Інтернет Магазин Тканин для Меблів та Штор Тандем Текстиль",
  description:
    "Придбайте всі доступні ексклюзивні коллекції лише в Тандем Текстиль.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SimpleSlider />
    </>
  )
}

export default Home
