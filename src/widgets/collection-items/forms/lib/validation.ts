import i18next from "i18next";
import { object, string } from "yup";

export const collectionItemSchema = object().shape({
  imageId: string().required(i18next.t("errors.required")),
  name: string()
    .required(i18next.t("errors.required"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
  author: string()
    .required(i18next.t("errors.required"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
  year: string()
    .required(i18next.t("errors.required"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
  collectionName: string().max(
    500,
    i18next.t("errors.maxLength", { value: 500 }),
  ),
});
