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
      title: title,
      description: description,
      content: content,
      coverImage: coverImage,
      category: category.split(","),
      date: new Date().toISOString(),
    })

    // reset form
    setTitle("")
    setDescription("")
    setContent("")
    setCategory("")
    setCoverImage("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Create Blog</h2>

      <Input
        placeholder="Blog Title"
        value={title}
        onChange={(e:any) => setTitle(e.target.value)}
        required
      />

      <Input
        placeholder="Category (comma separated)"
        value={category}
        onChange={(e:any) => setCategory(e.target.value)}
      />

      <Input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e:any) => setCoverImage(e.target.value)}
      />

      <Textarea
        placeholder="Short Description"
        value={description}
        onChange={(e:any) => setDescription(e.target.value)}
      />

      <Textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e:any) => setContent(e.target.value)}
        rows={5}
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  )
}

export default CreateBlogForm
