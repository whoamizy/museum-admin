import { Formik } from "formik"
import { LoginPayload, LoginSuccess, loginSchema } from "../lib"
import { FormikSubmit } from "shared/types"
import { LoginFormView } from "./login-form-view"
import { useLoginMutation } from "shared/api"
import Cookies from 'js-cookie'
import { AppLinks, PersistData } from "shared/enums"
import { useNavigate } from "react-router-dom"

const initialValues: LoginPayload = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const navigate = useNavigate()
  const { mutateAsync: login } = useLoginMutation()

  const onSubmit: FormikSubmit<LoginPayload> = (values, helpers) => {
    login(values, {
      onSuccess: (data: LoginSuccess) => {
        Cookies.set(PersistData.TOKEN, data.token, {
          secure: true,
          expires: 7,
        })
        navigate(AppLinks.HOME, { replace: true })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
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