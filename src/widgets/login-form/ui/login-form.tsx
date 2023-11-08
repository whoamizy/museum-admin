import { Formik } from "formik"
import { LoginPayload, LoginSuccess, loginSchema } from "../lib"
import { FormikSubmit } from "shared/types"
import { LoginFormView } from "./login-form-view"
import { useLoginMutation } from "shared/api"
import Cookies from 'js-cookie'
import { AppLinks, PersistData } from "shared/enums"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const initialValues: LoginPayload = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const navigate = useNavigate()
  const { mutateAsync: login } = useLoginMutation()
  const { t } = useTranslation()

  const onSubmit: FormikSubmit<LoginPayload> = (values, helpers) => {
    login(values, {
      onSuccess: (data: LoginSuccess) => {
        Cookies.set(PersistData.TOKEN, data.token, {
          secure: true,
          expires: 7,
        })
        navigate(AppLinks.USERS, { replace: true })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        helpers.setFieldTouched('email', true, false)
        helpers.setFieldTouched('password', true, false)
        helpers.setFieldError('email', t('login.invalidEmailOrPassword'))
        helpers.setFieldError('password', t('login.invalidEmailOrPassword'))
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
      component={LoginFormView}
    />
  )
}