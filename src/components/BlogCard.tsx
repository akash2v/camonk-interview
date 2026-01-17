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
    <Card onClick={onSelect} className="cursor-pointer">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">
          {blog.category.join(", ")}
        </p>
        <h3 className="font-semibold">{blog.title}</h3>
        <p className="text-sm">{blog.description}</p>
      </CardContent>
    </Card>
  )
}
