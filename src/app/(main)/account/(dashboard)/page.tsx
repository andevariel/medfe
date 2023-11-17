import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Обліковий запис",
  description: "Огляд активності вашого облікового запису.",
}

export default function Account() {
  return <OverviewTemplate />
}
