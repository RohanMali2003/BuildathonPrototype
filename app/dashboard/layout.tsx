'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Activity,
  MessageSquare,
  Calendar,
  Settings,
  Bell,
  User
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Health Tracking', href: '/dashboard/health', icon: Activity },
  { name: 'AI Assistant', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentPath, setCurrentPath] = useState('/dashboard')

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/dashboard" className="font-bold text-2xl">
            ReLive
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-accent rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="container flex gap-8 py-8">
        {/* Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = currentPath === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-accent" : "hover:bg-accent/50"
                  )}
                  onClick={() => setCurrentPath(item.href)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
