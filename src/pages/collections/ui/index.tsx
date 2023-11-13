import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useGetAllCollections } from "shared/api"
import { ContentPlate, PageWrapper } from "shared/components"
import { SearchBar } from "widgets/search-bar"
import styles from './styles.module.scss'
import { Button } from "@consta/uikit/Button"
import { ContentLoader } from "widgets/content-loader"
import { CollectionsItem } from "./collections-item"
import { NotFound } from "widgets/not-found"
import { Modal } from "widgets/modal"
import { useModal } from "shared/providers"
import { AddCollectionForm } from "widgets/collections/add"

export const CollectionsPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")
  const { data: collections, isLoading } = useGetAllCollections()
  const [filteredCollections, setFilteredCollections] = useState(collections)
  const { open } = useModal()

  const filterVariantsHandler = useCallback(() => {
    if (!collections) return
    if (searchValue) {
      setFilteredCollections(collections.filter(({ name }) => name.toLowerCase().startsWith(searchValue.toLowerCase())))
    } else {
      setFilteredCollections(collections)
    }
  }, [collections, searchValue])

  useEffect(() => {
    filterVariantsHandler()
  }, [filterVariantsHandler])

  return (
    <PageWrapper>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('collections.search')}
      />
      <div className={styles.infoLine}>
        <h1 className={styles.title}>{t('collections.title')}</h1>
        <Button
          size="l"
          label={t('collections.addNew')}
          onClick={open}
        />
      </div>
      <div className={styles.topLine}>
        <div className={styles.topLineCategory}>
          {t('collections.name')}
        </div>
        <div className={styles.topLineCategory}></div>
      </div>
      <ContentPlate>
        {isLoading && <ContentLoader />}
        {!!filteredCollections &&
          <>
            {filteredCollections.length === 0 && <NotFound />}
            <ul>
              {filteredCollections.map((collection) =>
                <li key={collection._id}>
                  <CollectionsItem {...collection} />
                </li>
              )}
            </ul>
          </>
        }
      </ContentPlate>
      <Modal>
        <AddCollectionForm />
      </Modal>
    </PageWrapper>
  )
}
