import { useBlogs } from "../hooks/useBlogs"
import { BlogCard } from "./BlogCard"

export function BlogList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading, isError } = useBlogs()

  if (isLoading) return <p>Loading blogs...</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <div className="space-y-4">
      {data?.map(blog => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={() => onSelect(blog.id)}
        />
      ))}
    </div>
  )
}
