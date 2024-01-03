import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title:
    "Каталог Тканини для Меблів, Штор та Портьер в Києві | Тандем Текстиль",
  description:
    "Каталог тканин для меблів, штор та портьер з Бельгії та Італії. Ексклюзивні колекції Brutex в Києві.",
  keywords:
    "каталог тканини, купити тканину, тканина меблева, тканина шторна, тканина портьерна, тканина з Бельгії, тканина з Італії, склад тканин в Києві, ексклюзивні колекції, Brutex, Bru, Брутекс, Бру",
}

export default function StorePage() {
  return <StoreTemplate />
}
