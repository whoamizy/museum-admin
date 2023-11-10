import { useMutation, useQuery } from '@tanstack/react-query'
import { NewsService } from '../services'
import { NewsItemPayload } from 'widgets/news-item-form/lib'

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => NewsService.getAllNews(),
  })
}

export const useDeleteNewsItem = () =>
  useMutation({ mutationFn: (id: string) => NewsService.delete(id) })

export const useCreateNews = () => {
  return useMutation({
    mutationFn: (payload: NewsItemPayload) => NewsService.create(payload),
  })
}