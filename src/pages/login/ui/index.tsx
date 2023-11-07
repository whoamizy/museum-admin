import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppLinks } from "shared/enums"
import { useAuth } from "shared/providers"
import { LoginForm } from "widgets/login-form"

export const LoginPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate(AppLinks.HOME, { replace: true })
    }
  }, [navigate, user])

  return (
    <LoginForm />
  )
}
