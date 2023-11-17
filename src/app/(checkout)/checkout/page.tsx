import CheckoutTemplate from "@modules/checkout/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Оформлення заказу",
}

export default function Checkout() {
  return <CheckoutTemplate />
}
