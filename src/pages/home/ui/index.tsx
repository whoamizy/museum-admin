import { useAuth } from "shared/providers"

export const HomePage = () => {
  const { user } = useAuth()

  return (
    <div>
      {!!user && JSON.stringify(user)}
    </div>
  )
}