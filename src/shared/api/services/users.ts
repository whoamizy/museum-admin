import { Path } from "shared/enums";
import { BaseService } from "./base";
import { User } from "entities/user";

export class UsersService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<User[]>({
      url: Path.USERS,
    });

    return data;
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<User>({
      url: `${Path.USERS}/${id}`,
      method: "DELETE",
    });

    return data;
  }
}
