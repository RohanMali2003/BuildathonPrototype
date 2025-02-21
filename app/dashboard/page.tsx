'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
    Activity,
    Brain,
    Calendar,
    MessageSquare,
    Timer,
    TrendingUp,
    Users,
    Watch
} from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
                    <p className="text-muted-foreground">
                        Your recovery journey is progressing well. Here&apos;s your daily overview.
                    </p>
                </div>
                <Button className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chat with AI Assistant
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recovery Streak</CardTitle>
                        <Timer className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">28 Days</div>
                        <p className="text-xs text-muted-foreground">
                            +2 days from last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
                        <Activity className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85/100</div>
                        <Progress value={85} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Support Check-ins</CardTitle>
                        <Users className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3/4</div>
                        <p className="text-xs text-muted-foreground">
                            Weekly goal progress
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Tomorrow</div>
                        <p className="text-xs text-muted-foreground">
                            2:00 PM - Dr. Smith
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="md:col-span-4">
                    <CardHeader>
                        <CardTitle>Recovery Insights</CardTitle>
                        <CardDescription>
                            Your health metrics and progress over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                            Health Metrics Graph Placeholder
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Daily Goals</CardTitle>
                        <CardDescription>
                            Your personalized recovery tasks
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <div className="flex-1">
                                    <p className="font-medium">Morning Meditation</p>
                                    <p className="text-sm text-muted-foreground">Completed at 7:30 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                <div className="flex-1">
                                    <p className="font-medium">Support Group Meeting</p>
                                    <p className="text-sm text-muted-foreground">2:00 PM Today</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-2 w-2 rounded-full bg-gray-300" />
                                <div className="flex-1">
                                    <p className="font-medium">Evening Check-in</p>
                                    <p className="text-sm text-muted-foreground">8:00 PM Today</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Wellness Tips</CardTitle>
                        <CardDescription>
                            AI-powered recommendations for your journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Brain className="w-5 h-5 text-primary mt-0.5" />
                                <p className="text-sm">Practice deep breathing exercises when feeling stressed</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Watch className="w-5 h-5 text-primary mt-0.5" />
                                <p className="text-sm">Your sleep pattern shows improvement. Keep maintaining regular sleep schedule</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                                <p className="text-sm">Your recovery progress is steady. Consider joining an additional support group</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-4">
                    <CardHeader>
                        <CardTitle>Community Support</CardTitle>
                        <CardDescription>
                            Connect with others on similar journeys
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Evening Support Group</p>
                                    <p className="text-sm text-muted-foreground">8 members online</p>
                                </div>
                                <Button variant="outline" className="ml-auto">
                                    Join
                                </Button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Recovery Chat</p>
                                    <p className="text-sm text-muted-foreground">Active now</p>
                                </div>
                                <Button variant="outline" className="ml-auto">
                                    Chat
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}