import { PropsWithChildren } from "react"
import styles from './styles.module.scss'
import { useModal } from "shared/providers"

export const Modal = ({ children }: PropsWithChildren) => {
  const { isOpen, close } = useModal()

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!isOpen) return null

  return (
    <div className={styles.wrapper} onClick={close}>
      <div className={styles.inner} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}