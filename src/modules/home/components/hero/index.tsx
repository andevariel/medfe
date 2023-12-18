import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Представляємо останні колекції Тандем Текстиль.
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Цього сезону наші нові колекції втілюють комфорт і стиль.
        </p>
        <UnderlineLink href="/store">Каталог тканин</UnderlineLink>
      </div>
      <Image
        src="/tandem.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Меблева тканина Вікер червоного кольору рогожка"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
