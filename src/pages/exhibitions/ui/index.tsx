import { useState } from "react"
import { useTranslation } from "react-i18next"
import { PageWrapper } from "shared/components"
import { SearchBar } from "widgets/search-bar"
import styles from './styles.module.scss'
import { Button } from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { AppLinks } from "shared/enums"

export const ExhibitionsPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")

  const navigate = useNavigate()

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
    </PageWrapper>
  )
}
