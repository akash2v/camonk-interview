// src/components/BlogDetail.tsx
import { useBlog } from "../hooks/useBlogs"

export function BlogDetail({ blogId }: { blogId: number }) {
  const { data, isLoading } = useBlog(blogId)

  if (!blogId) return <p>Select a blog</p>
  if (isLoading) return <p>Loading blog...</p>

  return (
    <div className="space-y-4">
      <img src={data?.coverImage} className="rounded-lg" />
      <h1 className="text-xl font-bold">{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  )
}
