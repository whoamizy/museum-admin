import { Path } from 'shared/enums'
import { BaseService } from './base'
import { Exhibition, ExhibitionPayload } from 'entities/exhibition'

export class ExhibitionService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<Exhibition[]>({
      url: Path.EXHIBITIONS,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<Exhibition>({
      url: `${Path.EXHIBITIONS}/${id}`,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<Exhibition>({
      url: `${Path.EXHIBITIONS}/${id}`,
      method: 'DELETE',
    })

    return data
  }

  public static async create(payload: ExhibitionPayload) {
    const { data } = await this.fetch<Exhibition>({
      url: Path.EXHIBITIONS,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async update(id: string, payload: ExhibitionPayload) {
    const { data } = await this.fetch<Exhibition>({
      url: `${Path.EXHIBITIONS}/${id}`,
      data: payload,
      method: 'PATCH',
    })

    return data
  }
}
