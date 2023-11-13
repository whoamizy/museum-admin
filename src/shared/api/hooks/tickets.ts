import { useMutation, useQuery } from '@tanstack/react-query'
import { TicketsService } from '../services'

export const useGetAllTickets = () => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: () => TicketsService.getAll(),
  })
}

export const useDeleteTicket = () =>
  useMutation({ mutationFn: (id: string) => TicketsService.delete(id) })