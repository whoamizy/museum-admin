import { Formik } from "formik"
import { NewsItemPayload, newsItemSchema } from "../lib"
import { FormikSubmit } from "shared/types"
import { NewsItemView } from "./news-item-view"
import { useNavigate } from "react-router-dom"
import { useCreateNews } from "shared/api"
import { AppLinks } from "shared/enums"
import { useTranslation } from "react-i18next"
import { toast } from 'react-toastify'

interface Props {
  initialValues: NewsItemPayload
}

export const NewsItemForm = ({ initialValues }: Props) => {
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
      component={NewsItemView}
    />
  )
}
