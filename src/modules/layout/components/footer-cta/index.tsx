import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-white w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">
            Дізнайтеся більше про Тандем Текстиль.
          </h3>
          <div className="mb-4"></div>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            Історія Тандем Текстиль почалася в 2008 році в Києві. Імпортуючи
            тканини для меблів та портьєр безпосередньо від виробників з Бельгії
            та Італії, ми гарантуємо ексклюзивність кожної нашої робочої
            колекції і найвищу якість. Кожна коллекція була ретельно відібрана
            нашою командою враховуючи десятки нюансів щоб бути найкращою та
            стати бестселером. <br></br>
            Тандем Текстиль співпрацює не лише з дизайнерами, але й з кінцевими
            покупцями. Власна складська программа забезпечує ефективну
            постачальну ланцюгову систему для фабрик.
          </p>
          <div className="mt-6">
            <UnderlineLink href="/store">Каталог тканин</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/cta_4.jpg"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
