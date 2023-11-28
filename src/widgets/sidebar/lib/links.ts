import i18n from "shared/i18n";
import { Link } from "./types";
import { AppLinks } from "shared/enums";
import {
  CollectionIcon,
  ExhibitionIcon,
  NewsIcon,
  TicketIcon,
  UsersIcon,
} from "shared/assets/icons";

export const links: Link[] = [
  {
    name: i18n.t("pages.users"),
    path: AppLinks.USERS,
    Icon: UsersIcon,
  },
  {
    name: i18n.t("pages.news"),
    path: AppLinks.NEWS,
    Icon: NewsIcon,
  },
  {
    name: i18n.t("pages.collections"),
    path: AppLinks.COLLECTIONS,
    Icon: CollectionIcon,
  },
  {
    name: i18n.t("pages.exhibitions"),
    path: AppLinks.EXHIBITIONS,
    Icon: ExhibitionIcon,
  },
  {
    name: i18n.t("pages.tickets"),
    path: AppLinks.TICKETS,
    Icon: TicketIcon,
  },
];
