import { useMutation, useQuery } from '@tanstack/react-query'
import { CollectionItemPayload } from 'entities/collection'
import { CollectionItemsService } from '../services'

export const useGetAllCollectionItems = (id: string) => {
  return useQuery({
    queryKey: ['collection-items/' + id],
    queryFn: () => CollectionItemsService.getAll(id),
  })
}

export const useGetOneCollectionItem = (id: string) => {
  return useQuery({
    queryKey: ['collection-items/' + id],
    queryFn: () => CollectionItemsService.getOne(id),
  })
}

export const useDeleteCollectionItem = () =>
  useMutation({ mutationFn: (id: string) => CollectionItemsService.delete(id) })

export const useCreateCollectionItem = () => {
  return useMutation({
    mutationFn: (payload: CollectionItemPayload) => CollectionItemsService.create(payload),
  })
}

export const useUpdateCollectionItem = (id: string) => {
  return useMutation({
    mutationFn: (payload: CollectionItemPayload) => CollectionItemsService.update(id, payload),
  })
}