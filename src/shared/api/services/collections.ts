import { Path } from 'shared/enums'
import { BaseService } from './base'
import { Collection, CollectionPayload } from 'entities/collection'

export class CollectionsService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<Collection[]>({
      url: Path.COLLECTIONS,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<Collection>({
      url: `${Path.COLLECTIONS}/${id}`,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<Collection>({
      url: `${Path.COLLECTIONS}/${id}`,
      method: 'DELETE',
    })

    return data
  }

  public static async create(payload: CollectionPayload) {
    const { data } = await this.fetch<Collection>({
      url: Path.COLLECTIONS,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async update(id: string, payload: CollectionPayload) {
    const { data } = await this.fetch<Collection>({
      url: `${Path.COLLECTIONS}/${id}`,
      data: payload,
      method: 'PATCH',
    })

    return data
  }
}
