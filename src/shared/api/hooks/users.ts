import { useMutation, useQuery } from "@tanstack/react-query";
import { UsersService } from "../services";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => UsersService.getAll(),
  });
};

export const useDeleteUser = () =>
  useMutation({ mutationFn: (id: string) => UsersService.delete(id) });
