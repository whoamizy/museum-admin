import { Path } from 'shared/enums'
import { BaseService } from './base'
import { Image } from 'entities/image'

export class ImageService extends BaseService {
  public static async upload(payload: File) {
    const { data } = await this.fetch<Image>({
      url: Path.UPLOAD_IMAGE,
      data: {
        file: payload,
        isJson: false,
      },
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch({
      url: `${Path.REMOVE_IMAGE}${id}`,
      method: 'DELETE'
    })

    return data
  }
}
