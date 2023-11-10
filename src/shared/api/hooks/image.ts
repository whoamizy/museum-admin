import { useMutation } from '@tanstack/react-query'

import { ImageService } from '../services'

export const useUploadImage = () => {
  return useMutation({
    mutationFn: (payload: File) => ImageService.upload(payload),
  })
}

export const useDeleteImage = () =>
  useMutation({ mutationFn: (id: string) => ImageService.delete(id) })