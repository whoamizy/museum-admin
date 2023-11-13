import { Path } from 'shared/enums'
import { BaseService } from './base'
import { CollectionItem, CollectionItemPayload } from 'entities/collection'

export class CollectionItemsService extends BaseService {
  public static async getAll(id: string) {
    const { data } = await this.fetch<CollectionItem[]>({
      url: `/${id}${Path.COLLECTION_ITEMS}`,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<CollectionItem>({
      url: `${Path.COLLECTION_ITEMS}/${id}`,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<CollectionItem>({
      url: `${Path.COLLECTION_ITEMS}/${id}`,
      method: 'DELETE',
    })

    return data
  }

  public static async create(payload: CollectionItemPayload) {
    const { data } = await this.fetch<CollectionItem>({
      url: Path.COLLECTION_ITEMS,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async update(id: string, payload: CollectionItemPayload) {
    const { data } = await this.fetch<CollectionItem>({
      url: `${Path.COLLECTION_ITEMS}/${id}`,
      data: payload,
      method: 'PATCH',
    })

    return data
  }
}
