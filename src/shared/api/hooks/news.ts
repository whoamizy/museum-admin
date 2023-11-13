import { useMutation, useQuery } from '@tanstack/react-query'
import { NewsService } from '../services'
import { NewsItemPayload } from 'entities/news'

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => NewsService.getAll(),
  })
}

export const useGetOneNews = (id: string) => {
  return useQuery({
    queryKey: ['news/' + id],
    queryFn: () => NewsService.getOne(id),
  })
}

export const useDeleteNewsItem = () =>
  useMutation({ mutationFn: (id: string) => NewsService.delete(id) })

export const useCreateNews = () => {
  return useMutation({
    mutationFn: (payload: NewsItemPayload) => NewsService.create(payload),
  })
}

export const useUpdateNews = (id: string) => {
  return useMutation({
    mutationFn: (payload: NewsItemPayload) => NewsService.update(id, payload),
  })
}