import { type AxiosRequestConfig } from 'axios'

import { api } from '../axios'

export class BaseService {
  public static async fetch<T>(config: AxiosRequestConfig) {
    return await api.request<T>(config)
  }
}
