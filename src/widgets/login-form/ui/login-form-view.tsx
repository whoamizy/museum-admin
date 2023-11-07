import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { FormikProps } from 'formik';
import { LoginPayload } from '../lib';

export const LoginFormView = (
  {
    values,
    errors,
    touched,
    submitForm,
    isSubmitting,
    isValid,
    setFieldValue
  }: FormikProps<LoginPayload>
) => {
  const { email, password } = values
  const { email: emailError, password: passwordError } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  return (
    <div>
      <TextField
        id="email"
        type="email"
        value={email}
        onChange={(e) => setFieldValue('email', e.value)}
        caption={shouldDisplayError ? emailError : undefined}
        status={emailError ? 'alert' : undefined}
      />
      <TextField
        id="password"
        type="password"
        value={password}
        onChange={(e) => setFieldValue('password', e.value)}
        caption={shouldDisplayError ? passwordError : undefined}
        status={passwordError ? 'alert' : undefined}
      />
      <Button
        type="submit"
        label="Войти"
        loading={isSubmitting}
        disabled={isDisabled}
        onClick={submitForm}
      />
    </div>
  )
}
