import { Path } from "shared/enums";
import { BaseService } from "./base";
import { User } from "entities/user";

export class UserService extends BaseService {
  public static async getMe() {
    const { data } = await this.fetch<User>({
      url: Path.ME,
    });

    return data;
  }
}
