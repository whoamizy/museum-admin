import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import isEmpty from "lodash/isEmpty";

import { env } from "shared/utils";
import { queryClient } from "shared/providers";
import { AppLinks, PersistData } from "shared/enums";
import { redirect } from "react-router-dom";
import i18n from "shared/i18n";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: env.apiUrl,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(PersistData.TOKEN);

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(undefined, (err) => {
  const { response } = err as AxiosError;

  const shouldShowToast = true;

  if (response?.status === 401) {
    localStorage.removeItem(PersistData.TOKEN);
    redirect(AppLinks.LOGIN);
    queryClient.clear();

    return Promise.reject(err);
  }

  if (shouldShowToast) {
    toast.error(i18n.t("server.error"));

    return Promise.reject(err);
  }
});

api.defaults.transformRequest = function (data = {}) {
  const { isJson = true, ...body } = data;

  if (isEmpty(body)) return;

  if (!isJson) {
    const formData = new FormData();

    for (const key in body) {
      if (Array.isArray(body[key])) {
        for (const item of body[key]) {
          formData.append(key, item);
        }
      } else {
        formData.append(key, body[key]);
      }
    }

    return formData;
  }

  return JSON.stringify(body);
};
