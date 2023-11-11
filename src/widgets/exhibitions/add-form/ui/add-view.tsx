import { ExhibitionPayload } from "entities/exhibition"
import { FormikProps } from "formik"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useDeleteImage, useUploadImage } from "shared/api"
import { Image } from "entities/image"
import { env } from "shared/utils"
import { Path } from "shared/enums"
import { SaveBar } from "widgets/save-bar"
import styles from './styles.module.scss'
import { TextField } from "@consta/uikit/TextField"
import cn from "classnames"
import { DragNDropField } from "@consta/uikit/DragNDropField"
import { Button } from "@consta/uikit/Button"
import { DeleteIcon } from "shared/assets/icons"

export const AddExhibitionView = (
  {
    values,
    errors,
    touched,
    submitForm,
    isSubmitting,
    isValid,
    setFieldValue
  }: FormikProps<ExhibitionPayload>
) => {
  const { t } = useTranslation()
  const { mutateAsync: uploadImage } = useUploadImage()
  const { mutateAsync: deleteImage } = useDeleteImage()
  const { name, images, description, address } = values
  const {
    name: nameError,
    images: imagesError,
    description: descriptionError,
    address: addressError
  } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  const uploadHandler = (files: File[]) => {
    const file = files[0]
    uploadImage(file, {
      onSuccess: (data: Image) => {
        setFieldValue('images', [...images, data.id])
      },
      onError: () => {
        toast.error(t('errors.uploadImage'))
      }
    })
  }

  const deleteHandler = async (imageId: string) => {
    await deleteImage(imageId, {
      onSuccess: () => {
        setFieldValue('images', images.filter((id) => imageId !== id))
      },
      onError: () => {
        toast.error(t('errors.deleteImage'))
      }
    })
  }

  return (
    <>
      <SaveBar
        isSubmitting={isSubmitting}
        isDisabled={isDisabled}
        onSave={submitForm}
      />
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <div className={cn(styles.imageBlock, { [styles.error]: imagesError })}>
            {!!images &&
              images.map((image) =>
                <div key={image} className={styles.previewBack}>
                  <div className={styles.removeImage} onClick={() => deleteHandler(image)}>
                    <DeleteIcon />
                  </div>
                  <img className={styles.previewImage} src={`${env.apiUrl}${Path.GET_IMAGE}${image}`} alt="превью" />
                </div>
              )
            }
            {images.length < 3 &&
              <DragNDropField
                multiple={false}
                accept="image/*"
                onDropFiles={uploadHandler}
              >
                {({ openFileDialog }) => (
                  <>
                    <div className={styles.imageDescription}>
                      {t('exhibitions.form.pickImageDescription')}
                    </div>
                    <br />
                    <Button
                      label={t('exhibitions.form.pickImage')}
                      onClick={openFileDialog}
                    />
                  </>
                )}
              </DragNDropField>
            }
          </div>
          <div className={styles.inputsBlock}>
            <div>
              <TextField
                id="name"
                width="full"
                type="text"
                value={name}
                onChange={(e) => setFieldValue('name', e.value)}
                caption={shouldDisplayError ? nameError : undefined}
                status={nameError ? 'alert' : undefined}
                placeholder={t('exhibitions.form.titlePlaceholder')}
                label={t('exhibitions.form.title')}
                labelPosition="top"
              />
            </div>
            <div>
              <TextField
                id="description"
                width="full"
                type="text"
                value={description}
                onChange={(e) => setFieldValue('description', e.value)}
                caption={shouldDisplayError ? descriptionError : undefined}
                status={descriptionError ? 'alert' : undefined}
                placeholder={t('exhibitions.form.descriptionPlaceholder')}
                label={t('exhibitions.form.description')}
                labelPosition="top"
              />
            </div>
            <div>
              <TextField
                id="address"
                width="full"
                type="text"
                value={address}
                onChange={(e) => setFieldValue('address', e.value)}
                caption={shouldDisplayError ? addressError : undefined}
                status={addressError ? 'alert' : undefined}
                placeholder={t('exhibitions.form.addressPlaceholder')}
                label={t('exhibitions.form.address')}
                labelPosition="top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}