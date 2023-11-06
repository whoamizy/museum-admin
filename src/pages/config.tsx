import { Path } from "shared/enums"
import { HomePage } from "./home"
import { LoginPage } from "./login"

export interface Route {
  path: Path
  element: React.ReactNode
}

export const routes: Route[] = [
  {
    path: Path.HOME,
    element: <HomePage />
  },
  {
    path: Path.LOGIN,
    element: <LoginPage />
  }
]
