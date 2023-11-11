import { AppLinks } from "shared/enums"
import { LoginPage } from "./login"
import { UsersPage } from "./users"
import { NewsPage } from "./news"
import { CollectionsPage } from "./collections"
import { ExhibitionsPage } from "./exhibitions"
import { TicketsPage } from "./tickets"
import { AddNewsPage } from "./news/add"
import { EditNewsPage } from "./news/edit"

export interface Route {
  path: AppLinks
  element: React.ReactNode
}

export const routes: Route[] = [
  {
    path: AppLinks.ROOT,
    element: <LoginPage />
  },
  {
    path: AppLinks.LOGIN,
    element: <LoginPage />
  },
  {
    path: AppLinks.USERS,
    element: <UsersPage />
  },
  {
    path: AppLinks.NEWS,
    element: <NewsPage />
  },
  {
    path: AppLinks.COLLECTIONS,
    element: <CollectionsPage />
  },
  {
    path: AppLinks.EXHIBITIONS,
    element: <ExhibitionsPage />
  },
  {
    path: AppLinks.TICKETS,
    element: <TicketsPage />
  },
  {
    path: AppLinks.ADD_NEWS,
    element: <AddNewsPage />
  },
  {
    path: AppLinks.EDIT_NEWS,
    element: <EditNewsPage />
  },
]
