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
      className="cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <CardContent className="p-5 space-y-3">
        {/* Category + Date */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {blog.category.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold leading-snug group-hover:underline">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
