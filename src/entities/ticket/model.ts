import { Exhibition } from "entities/exhibition"
import { User } from "entities/user"

export interface Ticket {
  _id: string
  user: User
  date: string
  time: string
  exhibition: Exhibition
}