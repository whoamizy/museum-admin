import { FormikConfig } from 'formik'

export type FormikSubmit<T> = FormikConfig<T>['onSubmit']
