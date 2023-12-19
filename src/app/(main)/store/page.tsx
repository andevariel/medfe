import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Каталог Тандем Текстиль - Тканини для Меблів, Штор, Портьер",
  description:
    "Каталог тканин для меблів, штор, портьер з Бельгії та Італії. Ексклюзивні колекції в Києві.",
}

export default function StorePage() {
  return <StoreTemplate />
}
