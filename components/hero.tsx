import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Recovery with AI, <br />Security, and Compassion
          <br />
          <strong>ReLive</strong><br />
        </h2>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          ReLive fosters a supportive recovery ecosystem by integrating AI-powered chatbots for empathetic conversations, just-in-time coping strategies, and community-driven gamification that rewards sobriety milestones. Through blockchain-based prescription security, peer engagement, and crisis intervention alerts, ReLive strengthens mental health support, builds safer communities, and promotes long-term recovery.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          <Link href="/chatbot" className="transition-colors hover:text-primary">
            Talk to our Chatbot
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href="/prescriptions" className="transition-colors hover:text-primary">
            View my prescriptions
          </Link>
        </Button>
      </div>
    </section>
  )
}

