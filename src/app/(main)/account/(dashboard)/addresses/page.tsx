import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Адреси",
  description: "Перегляньте свої адреси",
}

export default function Addresses() {
  return <AddressesTemplate />
}
