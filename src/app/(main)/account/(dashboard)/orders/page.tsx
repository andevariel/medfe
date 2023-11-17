import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Замовлення",
  description: "Огляд ваших попередніх замовлень..",
}

export default function Orders() {
  return <OrdersTemplate />
}
