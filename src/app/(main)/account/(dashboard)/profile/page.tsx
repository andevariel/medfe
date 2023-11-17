import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Обліковий запис",
  description: "Переглядайте та редагуйте свій обліковий запис Tandem Textile.",
}

export default function Profile() {
  return <ProfileTemplate />
}
