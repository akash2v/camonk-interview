import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-m font-semibold">Camonk Blog</h1>

      <div className="space-x-4">
        <Button>Home</Button>
        <Button>Blogs</Button>
        <Button>New Blog</Button>
      </div>
    </nav>
  )
}

export default Navbar
