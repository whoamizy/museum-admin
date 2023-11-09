import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { SearchBar } from 'widgets/search-bar'
import cn from 'classnames'
import { useGetAllNews } from 'shared/api'
import { ContentPlate } from 'shared/components'
import { ContentLoader } from 'widgets/content-loader'
import { NotFound } from 'widgets/not-found'
import { NewsItem } from './news-item'

export const NewsPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")
  const { data: news, isLoading } = useGetAllNews()
  const [filteredNews, setFilteredNews] = useState(news)

  const filterVariantsHandler = useCallback(() => {
    if (!news) return
    if (searchValue) {
      setFilteredNews(news.filter(({ title }) => title.toLowerCase().startsWith(searchValue.toLowerCase())))
    } else {
      setFilteredNews(news)
    }
  }, [news, searchValue])

  useEffect(() => {
    filterVariantsHandler()
  }, [filterVariantsHandler])

  return (
    <div className={styles.wrapper}>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('news.search')}
      />

      <h1 className={styles.title}>{t('news.title')}</h1>
      <div className={styles.topLine}>
        <div className={cn(styles.topLineCategory, styles.preview)}>
          {t('news.preview')}
        </div>
        <div className={cn(styles.topLineCategory, styles.itemTitle)}>
          {t('news.itemTitle')}
        </div>
      </div>
      <ContentPlate>
        {isLoading && <ContentLoader />}
        {!!filteredNews &&
          <>
            {filteredNews.length === 0 && <NotFound />}
            <ul>
              {filteredNews.map((newsItem) =>
                <li key={newsItem._id}>
                  <NewsItem {...newsItem} />
                </li>
              )}
            </ul>
          </>
        }
      </ContentPlate>
    </div>
  )
}
