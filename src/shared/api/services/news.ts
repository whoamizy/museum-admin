import { Path } from 'shared/enums'
import { BaseService } from './base'
import { NewsItem } from 'entities/news'
import { NewsItemPayload } from 'widgets/news-item-form/lib'

export class NewsService extends BaseService {
  public static async getAllNews() {
    const { data } = await this.fetch<NewsItem[]>({
      url: Path.NEWS,
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
}
