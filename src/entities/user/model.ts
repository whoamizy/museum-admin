import { Role } from "shared/enums"

export interface User {
  _id: string
  username: string
  email: string
  password: string
  role: Role
}