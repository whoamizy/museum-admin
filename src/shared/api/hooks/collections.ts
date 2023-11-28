import { useMutation, useQuery } from "@tanstack/react-query";
import { CollectionsService } from "../services/collections";
import { CollectionPayload } from "entities/collection";

export const useGetAllCollections = () => {
  return useQuery({
    queryKey: ["collections"],
    queryFn: () => CollectionsService.getAll(),
  });
};

export const useGetOneCollection = (id: string) => {
  return useQuery({
    queryKey: ["collections/" + id],
    queryFn: () => CollectionsService.getOne(id),
  });
};

export const useDeleteCollection = () =>
  useMutation({ mutationFn: (id: string) => CollectionsService.delete(id) });

export const useCreateCollection = () => {
  return useMutation({
    mutationFn: (payload: CollectionPayload) =>
      CollectionsService.create(payload),
  });
};

export const useUpdateCollection = (id: string) => {
  return useMutation({
    mutationFn: (payload: CollectionPayload) =>
      CollectionsService.update(id, payload),
  });
};
