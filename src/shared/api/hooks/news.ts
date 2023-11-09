import { useMutation, useQuery } from '@tanstack/react-query'
import { NewsService } from '../services'

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => NewsService.getAllNews(),
  })
}

export const useDeleteNewsItem = () =>
  useMutation({ mutationFn: (id: string) => NewsService.delete(id) })