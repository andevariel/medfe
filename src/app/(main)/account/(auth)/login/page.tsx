import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Увійти",
  description: "Увійдіть в свій обліковий запис Тандем Текстиль.",
}

export default function Login() {
  return <LoginTemplate />
}
