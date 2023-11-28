import { useMutation, useQuery } from "@tanstack/react-query";
import { ExhibitionService } from "../services";
import { ExhibitionPayload } from "entities/exhibition";

export const useGetAllExhibitions = () => {
  return useQuery({
    queryKey: ["exhibitions"],
    queryFn: () => ExhibitionService.getAll(),
  });
};

export const useGetOneExhibition = (id: string) => {
  return useQuery({
    queryKey: ["exhibitions/" + id],
    queryFn: () => ExhibitionService.getOne(id),
  });
};

export const useDeleteExhibition = () =>
  useMutation({ mutationFn: (id: string) => ExhibitionService.delete(id) });

export const useCreateExhibition = () => {
  return useMutation({
    mutationFn: (payload: ExhibitionPayload) =>
      ExhibitionService.create(payload),
  });
};

export const useUpdateExhibition = (id: string) => {
  return useMutation({
    mutationFn: (payload: ExhibitionPayload) =>
      ExhibitionService.update(id, payload),
  });
};
