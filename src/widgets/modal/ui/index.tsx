import { PropsWithChildren } from "react"
import { Modal as ConstaModal } from '@consta/uikit/Modal'

interface Props extends PropsWithChildren {
  isOpen: boolean
  close(): void
}

export const Modal = ({ children, isOpen, close }: Props) => {
  return (
    <ConstaModal
      isOpen={isOpen}
      hasOverlay
      onClickOutside={close}
      onEsc={close}
    >
      {children}
    </ConstaModal>
  )
}