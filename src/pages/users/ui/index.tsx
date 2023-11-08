import { SearchBar } from "widgets/search-bar"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ContentPlate } from "shared/components"
import styles from './styles.module.scss'
import { useGetAllUsers } from "shared/api"
import { ContentLoader } from "widgets/content-loader"
import { NotFound } from "widgets/not-found"
import { UsersItem } from "./users-item"

export const UsersPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")
  const { data: users, isLoading } = useGetAllUsers()
  const [filteredUsers, setFilteredUsers] = useState(users)

  const filterVariantsHandler = useCallback(() => {
    if (!users) return
    if (searchValue) {
      setFilteredUsers(users.filter(({ username }) => username.toLowerCase().startsWith(searchValue.toLowerCase())))
    } else {
      setFilteredUsers(users)
    }
  }, [searchValue, users])

  useEffect(() => {
    filterVariantsHandler()
  }, [filterVariantsHandler])

  return (
    <div className={styles.wrapper}>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('users.search')}
      />
      <ContentPlate>
        <h1 className={styles.title}>{t('users.title')}</h1>
        <div className={styles.topLine}>
          <div className={styles.topLineCategory}>
            {t('users.name')}
          </div>
          <div className={styles.topLineCategory}>
            {t('users.email')}
          </div>
          <div className={styles.topLineCategory}></div>
        </div>
        {isLoading && <ContentLoader />}
        {!!filteredUsers &&
          <>
            {filteredUsers.length === 0 && <NotFound />}
            <div className={styles.users}>
              <ul>
                {filteredUsers.map((user) =>
                  <li key={user._id}>
                    <UsersItem {...user} />
                  </li>
                )}
              </ul>
            </div>
          </>
        }
      </ContentPlate>
    </div>
  )
}
