import { ExhibitionPayload } from "entities/exhibition"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useCreateExhibition } from "shared/api"
import { AppLinks } from "shared/enums"
import { FormikSubmit } from "shared/types"
import { exhibitionSchema } from "widgets/exhibitions/lib"
import { AddExhibitionView } from "./add-view"

const initialValues: ExhibitionPayload = {
  name: "",
  images: [],
  description: "",
  address: ""
}

export const AddExhibitionForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutateAsync: create } = useCreateExhibition()

  const onSubmit: FormikSubmit<ExhibitionPayload> = (values, helpers) => {
    create(values, {
      onSuccess: () => {
        toast.success(t('exhibitions.successCreate'))
        navigate(AppLinks.EXHIBITIONS, { replace: true })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('exhibitions.errorCreate'))
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={exhibitionSchema}
      component={AddExhibitionView}
    />
  )
}