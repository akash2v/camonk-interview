import { Button } from "@/components/ui/button"
import { useBlog } from "../hooks/useBlogs"

export function BlogDetail({ blogId }: { blogId: number }) {
  const { data, isLoading } = useBlog(blogId)

  if (!blogId) {
    return (
      <p className="text-muted-foreground text-center">
        Select a blog to read
      </p>
    )
  }

  if (isLoading) {
    return <p className="text-muted-foreground">Loading blog...</p>
  }

  if (!data) {
    return <p className="text-muted-foreground">Blog not found</p>
  }

  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      await navigator.share({
        title: data.title,
        text: data.description,
        url,
      })
    } else {
      await navigator.clipboard.writeText(url)
      alert("Blog link copied!")
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Cover Image */}
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}

      {/* Category + Date */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          {data.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>

        <span className="text-xs text-muted-foreground">
          {new Date(data.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight">
        {data.title}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground">
        {data.description}
      </p>

      {/* Content */}
      <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
        {data.content}
      </div>

      {/* Share */}
      <div className="pt-4 border-t flex justify-end">
        <Button onClick={handleShare}>
          Share
        </Button>
      </div>
    </div>
  )
}
