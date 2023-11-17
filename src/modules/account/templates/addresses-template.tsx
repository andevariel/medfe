"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Адреси доставки</h1>
        <p className="text-base-regular">
        Переглядайте та оновлюйте ваші адреси доставки, ви можете додавати стільки, скільки вам потрібно. Збереження ваших адрес дозволить вам швидко користуватися ними під час оформлення замовлення.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
