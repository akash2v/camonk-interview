import type { Blog } from "../types/blog"

const BASE_URL = "http://localhost:3001/blogs"

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/${id}`)
  return res.json()
}

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
  return res.json()
}
