import { ExhibitionPayload } from "entities/exhibition"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useGetOneExhibition, useUpdateExhibition } from "shared/api"
import { AppLinks } from "shared/enums"
import { FormikSubmit } from "shared/types"
import { ContentLoader } from "widgets/content-loader"
import { exhibitionSchema } from "widgets/exhibitions/lib"
import { EditExhibitionView } from "./edit-view"

export const EditExhibitionForm = () => {
  const { id } = useParams()
  const { data: exhibition, isLoading, refetch } = useGetOneExhibition(id!)

  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutateAsync: update } = useUpdateExhibition(id!)

  const onSubmit: FormikSubmit<ExhibitionPayload> = (values, helpers) => {
    update(values, {
      onSuccess: () => {
        toast.success(t('exhibitions.successUpdate'))
        navigate(AppLinks.EXHIBITIONS, { replace: true })
        refetch()
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('exhibitions.errorUpdate'))
      }
    })
  }

  if (isLoading || !exhibition) {
    return <ContentLoader />
  }

  const initialValues: ExhibitionPayload = {
    name: exhibition.name,
    images: exhibition.images,
    description: exhibition.description,
    address: exhibition.address
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={exhibitionSchema}
      component={EditExhibitionView}
    />
  )
}