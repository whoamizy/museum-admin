import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useGetOneCollection, useUpdateCollection } from "shared/api"
import { FormikSubmit } from "shared/types"
import { CollectionPayload } from "entities/collection"
import { collectionSchema } from "widgets/collections/lib"
import { EditCollectionView } from "./edit-view"
import { ContentLoader } from "widgets/content-loader"
import { Modal } from "widgets/modal"

interface Props {
  id: string
  isOpen: boolean
  close(): void
}

export const EditCollectionForm = ({ id, isOpen, close }: Props) => {
  const { t } = useTranslation()
  const { data: collection, isLoading, refetch } = useGetOneCollection(id!)

  const { mutateAsync: update } = useUpdateCollection(id!)

  const onSubmit: FormikSubmit<CollectionPayload> = async (values, helpers) => {
    update(values, {
      onSuccess: () => {
        toast.success(t('collections.successUpdate'))
        close()
        refetch()
      },
      onSettled: () => {
        helpers.setSubmitting(false)
      },
      onError: () => {
        toast.error(t('collections.errorUpdate'))
      }
    })
  }

  if (isLoading || !collection) {
    return <ContentLoader />
  }

  const initialValues: CollectionPayload = {
    name: collection.name,
  }

  return (
    <Modal isOpen={isOpen} close={close}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={collectionSchema}
        component={EditCollectionView}
      />
    </Modal>
  )
}