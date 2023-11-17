import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Інтернет Магазин",
  description: "Каталог тканин.",
}

export default function StorePage() {
  return <StoreTemplate />
}
