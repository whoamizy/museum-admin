import { useMutation } from '@tanstack/react-query'

import { LoginService } from '../services'
import { LoginPayload } from 'widgets/login-form/lib'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => LoginService.login(payload),
  })
}
