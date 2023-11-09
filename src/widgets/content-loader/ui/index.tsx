import { Loader } from "shared/components"
import styles from './styles.module.scss'

export const ContentLoader = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  )
}