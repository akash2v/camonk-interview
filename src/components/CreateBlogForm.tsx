import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCreateBlog } from "../hooks/useBlogs"

const CreateBlogForm: React.FC = () => {
  const { mutate, isPending } = useCreateBlog()

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [coverImage, setCoverImage] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate({
      title,
      description,
      content,
      coverImage,
      category: category.split(","),
      date: new Date().toISOString(),
    })

    setTitle("")
    setDescription("")
    setContent("")
    setCategory("")
    setCoverImage("")
  }

  return (
    <div className="max-w-xl mx-auto bg-white border rounded-lg p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-xl font-semibold text-center">
          Create New Blog
        </h2>

        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <Input
            placeholder="Enter blog title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Category</label>
          <Input
            placeholder="Tech, Finance"
            value={category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
          />
        </div>

        {/* Cover Image */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Cover Image URL</label>
          <Input
            placeholder="https://image-url.com"
            value={coverImage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoverImage(e.target.value)
            }
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Description</label>
          <Textarea
            placeholder="Short description of the blog"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            rows={3}
          />
        </div>

        {/* Content */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Content</label>
          <Textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
            rows={6}
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? "Creating..." : "Create Blog"}
        </Button>
      </form>
    </div>
  )
}

export default CreateBlogForm
