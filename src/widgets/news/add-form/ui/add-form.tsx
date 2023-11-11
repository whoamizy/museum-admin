import { Formik } from "formik"
import { FormikSubmit } from "shared/types"
import { AddNewsView } from "./add-view"
import { useNavigate } from "react-router-dom"
import { useCreateNews } from "shared/api"
import { AppLinks } from "shared/enums"
import { useTranslation } from "react-i18next"
import { toast } from 'react-toastify'
import { NewsItemPayload } from "entities/news"
import { newsItemSchema } from "widgets/news/lib"

const initialValues: NewsItemPayload = {
  imageId: "",
  title: "",
  link: ""
}

export const AddNewsForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutateAsync: create } = useCreateNews()

  const onSubmit: FormikSubmit<NewsItemPayload> = (values, helpers) => {
    create(values, {
      onSuccess: () => {
        toast.success(t('news.successCreate'))
        navigate(AppLinks.NEWS, { replace: true })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('news.errorCreate'))
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={newsItemSchema}
      component={AddNewsView}
    />
  )
}
