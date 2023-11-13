import { Formik } from "formik"
import { FormikSubmit } from "shared/types"
import { useNavigate } from "react-router-dom"
import { useCreateCollectionItem } from "shared/api"
import { AppLinks } from "shared/enums"
import { useTranslation } from "react-i18next"
import { toast } from 'react-toastify'
import { CollectionItemPayload } from "entities/collection"
import { AddCollectionItemView } from "./add-view"
import { collectionItemSchema } from "widgets/collection-items/forms/lib"
import { queryClient } from "shared/providers"

interface Props {
  id: string
}

export const AddCollectionItemForm = ({ id }: Props) => {
  const initialValues: CollectionItemPayload = {
    imageId: "",
    name: "",
    author: "",
    year: "",
    collectionName: id
  }

  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutateAsync: create } = useCreateCollectionItem()

  const onSubmit: FormikSubmit<CollectionItemPayload> = (values, helpers) => {
    create(values, {
      onSuccess: () => {
        toast.success(t('collections.items.successCreate'))
        navigate(AppLinks.COLLECTIONS, { replace: true })
        queryClient.refetchQueries({
          queryKey: ['collection-items/' + id]
        })
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('collections.items.errorCreate'))
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={collectionItemSchema}
      component={AddCollectionItemView}
    />
  )
}
