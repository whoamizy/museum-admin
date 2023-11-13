import { AppLinks } from "shared/enums"
import { LoginPage } from "./login"
import { UsersPage } from "./users"
import { AddNewsPage, EditNewsPage, NewsPage } from "./news"
import { CollectionsPage } from "./collections"
import { AddExhibitionPage, EditExhibitionPage, ExhibitionsPage } from "./exhibitions"
import { TicketsPage } from "./tickets"
import { AddCollectionItemPage } from "./collections/add"

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
  {
    path: AppLinks.ADD_EXHIBITIONS,
    element: <AddExhibitionPage />
  },
  {
    path: AppLinks.EDIT_EXHIBITIONS,
    element: <EditExhibitionPage />
  },
  {
    path: AppLinks.ADD_COLLECTIONS_ITEMS,
    element: <AddCollectionItemPage />
  },
]
