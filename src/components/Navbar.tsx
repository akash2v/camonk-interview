import { Button } from "@/components/ui/button"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-m font-semibold">Camonk Blog</h1>

      <div className="space-x-4">
        <Link to={'/'}><Button> Home </Button></Link>
        <Link to={'/create-blog'}><Button> Create Blog </Button></Link>
        <Link to={'/blog'}><Button> BLog </Button></Link>
      </div>
    </nav>
  )
}

export default Navbar
