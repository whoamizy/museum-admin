import { Router } from "pages"
import { useAuth } from "shared/providers"
import { Sidebar } from "widgets/sidebar"
import styles from './styles.module.scss'

export const App = () => {
  const { user } = useAuth()

  return (
    <div className={styles.wrapper}>
      {!!user && <Sidebar />}
      <div className={styles.pageWrapper}>
        <Router />
      </div>
    </div>
  )
}
