import { SearchBar } from "widgets/search-bar"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const UsersPage = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string | null>("")

  return (
    <div>
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder={t('users.search')}
      />
    </div>
  )
}
