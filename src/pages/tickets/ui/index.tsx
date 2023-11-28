import { useTranslation } from "react-i18next";
import { useGetAllExhibitions, useGetAllTickets } from "shared/api";
import { ContentPlate, PageWrapper } from "shared/components";
import styles from "./styles.module.scss";
import { FilterTicketsBar } from "widgets/filter-tickets-bar";
import { ContentLoader } from "widgets/content-loader";
import { NotFound } from "widgets/not-found";
import { TicketsItem } from "./tickets-item";
import { useEffect, useState } from "react";
import { Exhibition } from "entities/exhibition";
import { filterTickets } from "../utils";
import format from "date-fns/format";

export const TicketsPage = () => {
  const { t } = useTranslation();
  const { data: tickets, isLoading } = useGetAllTickets();
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  const { data: exhibitions } = useGetAllExhibitions();

  const dates = [
    ...new Set(tickets?.map((t) => format(new Date(t.date), "dd.MM.yyyy"))),
  ];

  const [selectedExhibition, setSelectedExhibition] =
    useState<Exhibition | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (!tickets) return;
    setFilteredTickets(
      filterTickets(tickets, selectedExhibition, selectedDate)
    );
  }, [selectedDate, selectedExhibition, tickets]);

  return (
    <PageWrapper>
      {!!exhibitions && (
        <FilterTicketsBar
          exhibitions={exhibitions}
          selectedExhibition={selectedExhibition}
          setSelectedExhibition={setSelectedExhibition}
          dates={dates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      <div className={styles.infoLine}>
        <h1 className={styles.title}>{t("tickets.title")}</h1>
        <div className={styles.title}>
          {filteredTickets &&
            t("tickets.length", { value: filteredTickets.length })}
        </div>
      </div>
      <div className={styles.topLine}>
        <div className={styles.topLineCategory}>{t("tickets.exhibition")}</div>
        <div className={styles.topLineCategory}>{t("tickets.user")}</div>
        <div className={styles.topLineCategory}>{t("tickets.dateAndTime")}</div>
        <div className={styles.topLineCategory}></div>
      </div>
      <ContentPlate>
        {isLoading && <ContentLoader />}
        {!!filteredTickets && (
          <>
            {filteredTickets.length === 0 && <NotFound />}
            <ul>
              {filteredTickets.map((ticket) => (
                <li key={ticket._id}>
                  <TicketsItem {...ticket} />
                </li>
              ))}
            </ul>
          </>
        )}
      </ContentPlate>
    </PageWrapper>
  );
};
