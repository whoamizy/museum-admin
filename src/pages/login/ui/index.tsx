import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppLinks } from "shared/enums"
import { useAuth } from "shared/providers"
import { LoginForm } from "widgets/login-form"
import styles from './styles.module.scss'
import museumPreview from 'shared/assets/images/museum-preview.png'

export const LoginPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate(AppLinks.HOME, { replace: true })
    }
  }, [navigate, user])

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <LoginForm />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={museumPreview} alt="музей" />
      </div>
    </div>
  )
}
