import { Path } from 'shared/enums'
import { BaseService } from './base'
import { NewsItem } from 'entities/news'

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
}
