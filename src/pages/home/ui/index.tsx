import { Button } from "@consta/uikit/Button"
import { useAuth } from "shared/providers"

export const HomePage = () => {
  const { user, logout } = useAuth()

  return (
    <div>
      {!!user && JSON.stringify(user)}
      <Button onClick={logout} label={'Выйти'} />
    </div>
  )
}