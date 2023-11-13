import i18next from 'i18next'
import { object, string } from 'yup'

export const collectionSchema = object().shape({
  name: string()
    .required(i18next.t('errors.required'))
    .max(500, i18next.t('errors.maxLength', { value: 500 })),
})
