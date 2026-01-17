import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b w-screen">
      <Link to={"/"} > <h2 className="text-2xl text-black font-semibold">Camonk Blog</h2></Link>

      <div className="space-x-4">
        <Link to={'/'}><Button> Home </Button></Link>
        <Link to={'/create-blog'}><Button> Create Blog </Button></Link>
        <a href="https://github.com/akash2v/" target="_blank"><Button> GitHub </Button></a>
      </div>
    </nav>
  )
}

export default Navbar
