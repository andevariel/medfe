import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Замовлення</h1>
        <p className="text-base-regular">
        Переглядайте ваші попередні замовлення та їх статус. Також ви можете створювати повернення або обміни для своїх замовлень за потреби.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
