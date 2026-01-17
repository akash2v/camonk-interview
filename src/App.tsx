import { useState } from "react"
import { BlogList } from "./components/BlogList"
import { BlogDetail } from "./components/BlogDetail"
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import CreateBlogForm from "./components/CreateBlogForm"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"

// const [modal, ShowModal] = useState(true);


function App() {
  const [selectedId, setSelectedId] = useState<number>(0)
  function Home() {
    return (
      <>
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div>
            <BlogList onSelect={setSelectedId} />
          </div>
          <div className="md:col-span-2">
            <BlogDetail blogId={selectedId} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/create-blog" element={<CreateBlogForm />}></Route>
          <Route path="/" element={<Home />}></Route>
          {/* <CreateBlogForm /> */}
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
