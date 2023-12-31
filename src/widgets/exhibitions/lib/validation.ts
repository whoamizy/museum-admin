import i18next from "i18next";
import { array, number, object, string } from "yup";

export const exhibitionSchema = object().shape({
  images: array()
    .min(1, i18next.t("errors.required"))
    .required(i18next.t("errors.required")),
  name: string()
    .required(i18next.t("errors.required"))
    .max(500, i18next.t("errors.maxLength", { value: 500 })),
  description: string()
    .required(i18next.t("errors.required"))
    .max(2000, i18next.t("errors.maxLength", { value: 2000 })),
  address: string()
    .required(i18next.t("errors.required"))
    .max(1000, i18next.t("errors.maxLength", { value: 1000 })),
  price: number()
    .required(i18next.t("errors.required"))
    .min(1, i18next.t("errors.minPrice")),
});
