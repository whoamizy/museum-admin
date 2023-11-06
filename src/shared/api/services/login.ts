import { Path } from 'shared/enums'
import { BaseService } from './base'

export class LoginService extends BaseService {
  public static async login(payload: unknown) {
    const { data } = await this.fetch({
      url: Path.LOGIN,
      data: payload,
      method: 'POST',
    })

    return data
  }
}
