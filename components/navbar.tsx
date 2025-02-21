import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">ReLive</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/dashboard" className="transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/prescriptions" className="transition-colors hover:text-primary">
            My Prescriptions
          </Link>
          <Link href="/chatbot" className="transition-colors hover:text-primary">
            Chat with AI
          </Link>
          <Link href="https://docs.google.com/presentation/d/1ITZDRjiCUzMF_g_-1QC-or_0GGXeB0s__rYWMFnI5t4/edit?usp=sharing" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/RohanMali2003/BuildathonPrototype" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}