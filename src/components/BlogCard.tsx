import { Card, CardContent } from "@/components/ui/card"
import type { Blog } from "../types/blog"

export function BlogCard({
  blog,
  onSelect,
}: {
  blog: Blog
  onSelect: () => void
}) {
  return (
    <Card
      onClick={onSelect}
      className="cursor-pointer transition hover:shadow-md"
    >
      <CardContent className="p-5 space-y-3">

        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-base font-semibold leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
