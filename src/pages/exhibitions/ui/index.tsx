import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ContentPlate, PageWrapper } from "shared/components"
import { SearchBar } from "widgets/search-bar"
import styles from './styles.module.scss'
import { Button } from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { AppLinks } from "shared/enums"
import { useGetAllExhibitions } from "shared/api"
import { ContentLoader } from "widgets/content-loader"
import { NotFound } from "widgets/not-found"
import { ExhibitionItem } from "./exhibition-item"

export const ExhibitionsPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")
  const { data: exhibitions, isLoading } = useGetAllExhibitions()
  const [filteredExhibitions, setFilteredExhibitions] = useState(exhibitions)
  const navigate = useNavigate()

  const filterVariantsHandler = useCallback(() => {
    if (!exhibitions) return
    if (searchValue) {
      setFilteredExhibitions(exhibitions.filter(({ name }) => name.toLowerCase().startsWith(searchValue.toLowerCase())))
    } else {
      setFilteredExhibitions(exhibitions)
    }
  }, [exhibitions, searchValue])

  useEffect(() => {
    filterVariantsHandler()
  }, [filterVariantsHandler])

  const navigateToNew = () => {
    navigate(AppLinks.ADD_EXHIBITIONS)
  }

  return (
    <PageWrapper>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('exhibitions.search')}
      />
      <div className={styles.infoLine}>
        <h1 className={styles.title}>{t('exhibitions.title')}</h1>
        <Button
          size="l"
          label={t('exhibitions.addNew')}
          onClick={navigateToNew}
        />
      </div>
      <div className={styles.topLine}>
        <div className={styles.topLineCategory}>
          {t('exhibitions.preview')}
        </div>
        <div className={styles.topLineCategory}>
          {t('exhibitions.itemTitle')}
        </div>
        <div className={styles.topLineCategory}>
          {t('exhibitions.address')}
        </div>
      </div>
      <ContentPlate>
        {isLoading && <ContentLoader />}
        {!!filteredExhibitions &&
          <>
            {filteredExhibitions.length === 0 && <NotFound />}
            <ul>
              {filteredExhibitions.map((exhibition) =>
                <li key={exhibition._id}>
                  <ExhibitionItem {...exhibition} />
                </li>
              )}
            </ul>
          </>
        }
      </ContentPlate>
    </PageWrapper>
  )
}
