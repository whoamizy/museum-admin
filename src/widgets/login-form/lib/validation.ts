import i18next from 'i18next'
import { object, string } from 'yup'

export const loginSchema = object().shape({
  email: string()
    .required(i18next.t('form.error'))
    .test('Validate Email', i18next.t('form.error'), (value) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(String(value).toLowerCase())
    }),
  password: string()
    .required(i18next.t('form.error'))
    .matches(/^\S*$/, i18next.t('form.error'))
    .min(8, i18next.t('form.error', { value: 8 }))
    .max(30, i18next.t('form.error', { value: 30 })),
})
