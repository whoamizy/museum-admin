import { useQuery } from '@tanstack/react-query'
import { UsersService } from '../services'

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => UsersService.getAllUsers(),
  })
}
