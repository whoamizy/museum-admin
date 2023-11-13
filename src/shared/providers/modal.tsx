import { noop } from "lodash"
import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react"

interface Values {
  isOpen: boolean
  open(): void
  close(): void
}

const initialValues: Values = {
  isOpen: false,
  open: noop,
  close: noop
}

const Context = createContext(initialValues)

export const useModal = () => {
  const ctx = useContext(Context)

  if (!ctx) {
    throw new Error('useModal cannot be used outside of ModalProvider')
  }

  return ctx
}

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const contextVal: Values = useMemo(
    () => ({
      isOpen,
      open,
      close
    }),
    [isOpen],
  )

  return <Context.Provider value={contextVal}>{children}</Context.Provider>
}