import { useMutation } from '@tanstack/react-query'

import { LoginService } from '../services'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: unknown) => LoginService.login(payload),
  })
}
