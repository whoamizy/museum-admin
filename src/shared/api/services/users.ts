import { Path } from 'shared/enums'
import { BaseService } from './base'
import { User } from 'entities/user'

export class UsersService extends BaseService {
  public static async getAllUsers() {
    const { data } = await this.fetch<User[]>({
      url: Path.USERS,
    })

    return data
  }
}
