import { useQueryClient } from "@tanstack/react-query"
import { User } from "entities/user"
import { noop } from "lodash"
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo } from "react"
import Cookies from 'js-cookie'
import { AppLinks, PersistData } from "shared/enums"
import { useNavigate } from "react-router-dom"
import { useGetMe } from "shared/api"

interface Values {
  user: User | null
  logout(): void
}

const initialValues: Values = {
  user: null,
  logout: noop,
}

const Context = createContext(initialValues)

export const useAuth = () => {
  const ctx = useContext(Context)

  if (!ctx) {
    throw new Error('useAuth cannot be used outside of AuthProvider')
  }

  return ctx
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient()
  const token = Cookies.get(PersistData.TOKEN)
  const navigate = useNavigate()

  useEffect(() => {
    queryClient.setDefaultOptions({ queries: { enabled: false } })

    if (!token) {
      navigate(AppLinks.LOGIN, { replace: true })
    }

    queryClient.setDefaultOptions({ queries: { enabled: undefined } })
  }, [navigate, queryClient, token])

  const logout = useCallback(() => {
    Cookies.remove(PersistData.TOKEN)
    queryClient.clear()
    navigate(AppLinks.LOGIN, { replace: true })
  }, [navigate, queryClient])

  const { data } = useGetMe({
    queryKey: ['user/me'],
    enabled: !!token
  })

  const contextVal: Values = useMemo(
    () => ({
      user: data ?? null,
      logout,
    }),
    [data, logout],
  )

  return <Context.Provider value={contextVal}>{children}</Context.Provider>
}