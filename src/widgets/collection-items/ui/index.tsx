import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import { useGetAllCollectionItems } from 'shared/api'
import { ContentLoader } from 'widgets/content-loader'
import { NotFound } from 'widgets/not-found'
import { CollectionItem } from './collection-item'

interface Props {
  id: string
}

export const CollectionItems = ({ id }: Props) => {
  const { t } = useTranslation()
  const { data: collectionItems, isLoading } = useGetAllCollectionItems(id)

  return (
    <>
      <div className={styles.topLine}>
        <div className={styles.topLineCategory}>
          {t('collections.items.preview')}
        </div>
        <div className={styles.topLineCategory}>
          {t('collections.items.name')}
        </div>
        <div className={styles.topLineCategory}>
          {t('collections.items.author')}
        </div>
        <div className={styles.topLineCategory}>
          {t('collections.items.year')}
        </div>
        <div className={styles.topLineCategory}></div>
      </div>
      <div>
        {isLoading && <ContentLoader />}
        {!!collectionItems &&
          <>
            {collectionItems.length === 0 &&
              <div className={styles.notFound}>
                <NotFound />
              </div>
            }
            <ul>
              {collectionItems.map((collectionItem) =>
                <li key={collectionItem._id}>
                  <CollectionItem collectionId={id} {...collectionItem} />
                </li>
              )}
            </ul>
          </>
        }
      </div>
    </>
  )
}
