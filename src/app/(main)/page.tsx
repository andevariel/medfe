import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SimpleSlider from "@modules/home/components/slider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Купити Тканини для Меблів, Штор та Портьер в Києві | Тандем Текстиль",
  description:
    "Тканина меблева, тканина для штор та портьер з Бельгії та Італії в Києві. Ексклюзивні колекції Brutex.",
  keywords:
    "купити тканину, тканина меблева, тканина шторна, тканина портьерна, тканина з Бельгії, тканина з Італії, склад тканин в Києві, ексклюзивні колекції, Brutex, Bru, Брутекс, Бру",
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
