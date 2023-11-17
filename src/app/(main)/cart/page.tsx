import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кошик",
  description: "Перегляньте свій кошик",
}

export default function Cart() {
  return <CartTemplate />
}
