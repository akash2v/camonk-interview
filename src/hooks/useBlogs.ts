// src/hooks/useBlogs.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getBlogs, getBlogById, createBlog } from "../api/blogs"

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })
}

export const useBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  })
}

export const useCreateBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}
