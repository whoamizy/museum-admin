import { useTranslation } from "react-i18next"
import { useGetAllExhibitions, useGetAllTickets } from "shared/api"
import { ContentPlate, PageWrapper } from "shared/components"
import styles from './styles.module.scss'
import { FilterTicketsBar } from "widgets/filter-tickets-bar"
import { ContentLoader } from "widgets/content-loader"
import { NotFound } from "widgets/not-found"
import { TicketsItem } from "./tickets-item"
import { useCallback, useEffect, useState } from "react"
import { Exhibition } from "entities/exhibition"

export const TicketsPage = () => {
  const { t } = useTranslation()
  const { data: tickets, isLoading } = useGetAllTickets()
  const [filteredTickets, setFilteredTickets] = useState(tickets)

  const { data: exhibitions } = useGetAllExhibitions()

  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);

  const filterVariantsHandler = useCallback(() => {
    if (!tickets) return

    if (selectedExhibition) {
      setFilteredTickets(tickets.filter(({ exhibition }) =>
        exhibition.name === selectedExhibition?.name
      ))
    } else {
      setFilteredTickets(tickets)
    }
  }, [selectedExhibition, tickets])

  useEffect(() => {
    filterVariantsHandler()
  }, [filterVariantsHandler])

  return (
    <PageWrapper>
      {!!exhibitions &&
        <FilterTicketsBar
          exhibitions={exhibitions}
          selectedExhibition={selectedExhibition}
          setSelectedExhibition={setSelectedExhibition}
        />
      }
      <div className={styles.infoLine}>
        <h1 className={styles.title}>{t('tickets.title')}</h1>
        <div className={styles.title}>{filteredTickets && t('tickets.length', {value: filteredTickets.length})}</div>
      </div>
      <div className={styles.topLine}>
        <div className={styles.topLineCategory}>
          {t('tickets.exhibition')}
        </div>
        <div className={styles.topLineCategory}>
          {t('tickets.user')}
        </div>
        <div className={styles.topLineCategory}>
          {t('tickets.dateAndTime')}
        </div>
        <div className={styles.topLineCategory}></div>
      </div>
      <ContentPlate>
        {isLoading && <ContentLoader />}
        {!!filteredTickets &&
          <>
            {filteredTickets.length === 0 && <NotFound />}
            <ul>
              {filteredTickets.map((ticket) =>
                <li key={ticket._id}>
                  <TicketsItem {...ticket} />
                </li>
              )}
            </ul>
          </>
        }
      </ContentPlate>
    </PageWrapper>
  )
}
