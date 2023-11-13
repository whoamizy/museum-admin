import { FormikProps } from "formik"
import { useTranslation } from "react-i18next"
import styles from 'widgets/collections/lib/styles.module.scss'
import { TextField } from "@consta/uikit/TextField"
import { Button } from "@consta/uikit/Button"
import { CollectionPayload } from "entities/collection"

export const AddCollectionView = (
  {
    values,
    errors,
    touched,
    submitForm,
    isSubmitting,
    isValid,
    setFieldValue
  }: FormikProps<CollectionPayload>
) => {
  const { t } = useTranslation()
  const { name } = values
  const {
    name: nameError
  } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  return (
    <div className={styles.wrapper}>
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
            placeholder={t('collections.form.namePlaceholder')}
            label={t('collections.form.name')}
            labelPosition="top"
          />
        </div>
        <div>
          <Button
            type="submit"
            label={t('general.save')}
            onClick={submitForm}
            loading={isSubmitting}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  )
}