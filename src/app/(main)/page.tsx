import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SimpleSlider from "@modules/home/components/slider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Тандем Текстиль - Тканини для Меблів, Штор, Портьер",
  description:
    "Придбайте ексклюзивні колекції тканин з Бельгії та Італії. Тканина для меблів, штор, портьер лише в Тандем Текстиль в Києві.",
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
