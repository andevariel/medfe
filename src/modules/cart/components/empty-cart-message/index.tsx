import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Ваш кошик порожній.</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
      У вашому кошику нічого немає. Давайте це змінимо! Скористайтеся посиланням нижче, щоб почати перегляд наших тканин.
      </p>
      <div>
        <UnderlineLink href="/store">Каталог тканин</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
