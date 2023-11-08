import { SearchBar } from "widgets/search-bar"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ContentPlate } from "shared/components"
import styles from './styles.module.scss'
import { useGetAllUsers } from "shared/api"

export const UsersPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")
  const { data } = useGetAllUsers()

  console.log(data)

  return (
    <div className={styles.wrapper}>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('users.search')}
      />
      <ContentPlate>
        alskujdhalkjwsdjk
      </ContentPlate>
    </div>
  )
}
