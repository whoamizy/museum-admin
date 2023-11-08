import { AppLinks } from "shared/enums"
import { HomePage } from "./home"
import { LoginPage } from "./login"

export interface Route {
  path: AppLinks
  element: React.ReactNode
}

export const routes: Route[] = [
  {
    path: AppLinks.HOME,
    element: <HomePage />
  },
  {
    path: AppLinks.LOGIN,
    element: <LoginPage />
  }
]
