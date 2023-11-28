import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { FormikProps } from "formik";
import { LoginPayload } from "../lib";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const LoginFormView = ({
  values,
  errors,
  touched,
  submitForm,
  isSubmitting,
  isValid,
  setFieldValue,
}: FormikProps<LoginPayload>) => {
  const { t } = useTranslation();
  const { email, password } = values;
  const { email: emailError, password: passwordError } = errors;

  const isDisabled = isSubmitting || !isValid;

  const shouldDisplayError = !!touched && !!errors;

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t("login.title")}</h1>
        <div className={styles.inputs}>
          <TextField
            width="full"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setFieldValue("email", e.value)}
            caption={shouldDisplayError ? emailError : undefined}
            status={emailError ? "alert" : undefined}
            placeholder={t("login.emailPlaceholder")}
            label={t("login.email")}
            labelPosition="top"
          />
          <TextField
            width="full"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setFieldValue("password", e.value)}
            caption={shouldDisplayError ? passwordError : undefined}
            status={passwordError ? "alert" : undefined}
            placeholder={t("login.passwordPlaceholder")}
            label={t("login.password")}
            labelPosition="top"
          />
        </div>
        <Button
          width="full"
          type="submit"
          label="Войти"
          loading={isSubmitting}
          disabled={isDisabled}
          onClick={submitForm}
        />
      </div>
    </div>
  );
};
