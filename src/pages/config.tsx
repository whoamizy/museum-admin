import { AppLinks } from "shared/enums"
import { LoginPage } from "./login"
import { UsersPage } from "./users"
import { NewsPage } from "./news"
import { CollectionsPage } from "./collections"
import { ExhibitionsPage } from "./exhibitions"
import { TicketsPage } from "./tickets"
import { AddNewNewsItemPage } from "./news/ui/add-new-news-item"

export interface Route {
  path: AppLinks
  element: React.ReactNode
}

export const routes: Route[] = [
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
    path: AppLinks.NEWS_NEW,
    element: <AddNewNewsItemPage />
  },
]
