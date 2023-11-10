import { PropsWithChildren } from "react"
import styles from './styles.module.scss'

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}