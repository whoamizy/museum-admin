import { Path } from 'shared/enums'
import { BaseService } from './base'
import { NewsItem, NewsItemPayload } from 'entities/news'

export class NewsService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<NewsItem[]>({
      url: Path.NEWS,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<NewsItem>({
      url: `${Path.NEWS}/${id}`,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<NewsItem>({
      url: `${Path.NEWS}/${id}`,
      method: 'DELETE',
    })

    return data
  }

  public static async create(payload: NewsItemPayload) {
    const { data } = await this.fetch<NewsItem>({
      url: Path.NEWS,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async update(id: string, payload: NewsItemPayload) {
    const { data } = await this.fetch<NewsItem>({
      url: `${Path.NEWS}/${id}`,
      data: payload,
      method: 'PATCH',
    })

    return data
  }
}
