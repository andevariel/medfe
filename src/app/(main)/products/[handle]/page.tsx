import { getProductByHandle } from "@lib/data"
import ProductTemplate from "@modules/products/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProductByHandle(params.handle)

  const product = data.products[0]

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Тканина для меблів, штор, портьєр`,
    description: `${product.title} - ${product.description}`,
    openGraph: {
      title: `${product.title} | Tandem Textile`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { products } = await getProductByHandle(params.handle).catch((err) => {
    notFound()
  })

  return <ProductTemplate product={products[0]} />
}
