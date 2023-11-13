import { PropsWithChildren } from "react"
import { useModal } from "shared/providers"
import { Modal as ConstaModal } from '@consta/uikit/Modal'

export const Modal = ({ children }: PropsWithChildren) => {
  const { isOpen, close } = useModal()

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