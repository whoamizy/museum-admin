import { FormikProps } from "formik"
import { SaveBar } from "widgets/save-bar"
import { useTranslation } from "react-i18next"
import { TextField } from "@consta/uikit/TextField"
import { DragNDropField } from '@consta/uikit/DragNDropField'
import styles from './styles.module.scss'
import { Button } from "@consta/uikit/Button"
import { useDeleteImage, useUploadImage } from "shared/api"
import { Image } from "entities/image"
import { toast } from 'react-toastify'
import { env } from "shared/utils"
import { Path } from "shared/enums"
import { DeleteIcon } from "shared/assets/icons"
import { NewsItemPayload } from "entities/news"
import cn from 'classnames'

export const EditNewsView = (
  {
    values,
    errors,
    touched,
    submitForm,
    isSubmitting,
    isValid,
    setFieldValue
  }: FormikProps<NewsItemPayload>
) => {
  const { t } = useTranslation()
  const { mutateAsync: uploadImage } = useUploadImage()
  const { mutateAsync: deleteImage } = useDeleteImage()
  const { imageId, link, title } = values
  const { imageId: imageError, link: linkError, title: titleError } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  const uploadHandler = (files: File[]) => {
    const file = files[0]
    uploadImage(file, {
      onSuccess: (data: Image) => {
        setFieldValue('imageId', data.id)
      },
      onError: () => {
        toast.error(t('news.form.errorUploadImage'))
      }
    })
  }

  const imageUrl = `${env.apiUrl}${Path.GET_IMAGE}${imageId}`

  console.log(123, imageId)

  const deleteHandler = async () => {
    await deleteImage(imageId, {
      onSuccess: () => {
        setFieldValue('imageId', undefined)
      },
      onError: () => {
        toast.error(t('news.form.errorDeleteImage'))
      }
    })
  }

  return (
    <>
      <SaveBar
        hideBack
        isSubmitting={isSubmitting}
        isDisabled={isDisabled}
        onSave={submitForm}
      />
      <div className={styles.formWrapper}>
        <div className={cn(styles.imageBlock, { [styles.error]: imageError })}>
          {!!imageId &&
            <div className={styles.previewBack}>
              <div className={styles.removeImage} onClick={deleteHandler}>
                <DeleteIcon />
              </div>
              <img className={styles.previewImage} src={imageUrl} alt="превью" />
            </div>
          }
          {!imageId &&
            <DragNDropField
              multiple={false}
              accept="image/*"
              onDropFiles={uploadHandler}
            >
              {({ openFileDialog }) => (
                <>
                  <div className={styles.imageDescription}>
                    {t('news.form.pickImageDescription')}
                  </div>
                  <br />
                  <Button
                    label={t('news.form.pickImage')}
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
              id="title"
              width="full"
              type="text"
              value={title}
              onChange={(e) => setFieldValue('title', e.value)}
              caption={shouldDisplayError ? titleError : undefined}
              status={titleError ? 'alert' : undefined}
              placeholder={t('news.form.titlePlaceholder')}
              label={t('news.form.title')}
              labelPosition="top"
            />
          </div>
          <div>
            <TextField
              id="link"
              width="full"
              type="text"
              value={link}
              onChange={(e) => setFieldValue('link', e.value)}
              caption={shouldDisplayError ? linkError : undefined}
              status={linkError ? 'alert' : undefined}
              placeholder={t('news.form.linkPlaceholder')}
              label={t('news.form.link')}
              labelPosition="top"
            />
          </div>
        </div>
      </div>
    </>
  )
}