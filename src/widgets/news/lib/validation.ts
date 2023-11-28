import i18next from "i18next";
import { object, string } from "yup";

export const newsItemSchema = object().shape({
  imageId: string().required(i18next.t("errors.required")),
  title: string()
    .required(i18next.t("errors.required"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
  link: string()
    .required(i18next.t("errors.required"))
    .url(i18next.t("errors.news.invalidLink"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
});
