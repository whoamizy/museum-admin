import { Path } from 'shared/enums'
import { BaseService } from './base'
import { LoginPayload, LoginSuccess } from 'widgets/login-form/lib'

export class LoginService extends BaseService {
  public static async login(payload: LoginPayload) {
    const { data } = await this.fetch<LoginSuccess>({
      url: Path.LOGIN,
      data: payload,
      method: 'POST',
    })

    return data
  }
}
