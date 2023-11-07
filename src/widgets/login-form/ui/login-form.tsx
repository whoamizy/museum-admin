import { Formik } from "formik"
import { LoginPayload, loginSchema } from "../lib"
import { FormikSubmit } from "shared/types"
import { LoginFormView } from "./login-form-view"

const initialValues: LoginPayload = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const onSubmit: FormikSubmit<LoginPayload> = (values) => {
    console.log(values)
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