import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="text-center py-16 px-6 bg-muted">
      <h2 className="text-3xl font-bold mb-4">
        Welcome to Camonk Blog
      </h2>

      <p className="text-muted-foreground mb-6">
        Read and create blogs about tech, finance and more.
      </p>

      <Button onClick={()=>{window.open("https://www.camonk.com/")}}>Get Started</Button>
    </div>
  )
}

export default Hero
