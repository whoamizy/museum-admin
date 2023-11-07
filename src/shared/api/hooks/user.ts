import {
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { User } from 'entities/user'
import { UserService } from '../services/user'

export const useGetMe = (queryOptions?: UseQueryOptions<User>) => {
  return useQuery({
    queryKey: ['user/me'],
    queryFn: () => UserService.getMe(),
    ...queryOptions,
  })
}
