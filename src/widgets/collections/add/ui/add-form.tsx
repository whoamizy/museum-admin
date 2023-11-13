import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useCreateCollection } from "shared/api"
import { FormikSubmit } from "shared/types"
import { CollectionPayload } from "entities/collection"
import { queryClient, useModal } from "shared/providers"
import { collectionSchema } from "widgets/collections/lib"
import { AddCollectionView } from "./add-view"

const initialValues: CollectionPayload = {
  name: ""
}

export const AddCollectionForm = () => {
  const { t } = useTranslation()
  const { mutateAsync: create } = useCreateCollection()
  const { close } = useModal()

  const onSubmit: FormikSubmit<CollectionPayload> = async (values, helpers) => {
    await create(values, {
      onSuccess: () => {
        toast.success(t('collections.successCreate'))
        close()
        queryClient.refetchQueries({ queryKey: ['collections'] })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('collections.errorCreate'))
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={collectionSchema}
      component={AddCollectionView}
    />
  )
}