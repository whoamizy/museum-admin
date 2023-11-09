import { Router } from "pages"
import { Sidebar } from "widgets/sidebar"
import styles from './styles.module.scss'
import { useLocation } from "react-router-dom"
import { AppLinks } from "shared/enums"

export const App = () => {
  const { pathname } = useLocation()

  const isSidebarVisible = pathname !== AppLinks.LOGIN

  return (
    <div className={styles.wrapper}>
      {isSidebarVisible && <Sidebar />}
      <div className={styles.pageWrapper}>
        <Router />
      </div>
    </div>
  )
}
