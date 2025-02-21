import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { Loader2, Award, ArrowRight, Watch } from "lucide-react"
import Link from "next/link"

export default function OnboardingSuccessPage() {
    return (
        <div className="container max-w-4xl py-12">
            {/* Success Message */}
            <div className="text-center mb-8">
                <Badge className="mb-4 bg-green-100 text-green-800">
                    <Award className="w-4 h-4 mr-1" />
                    Onboarding Complete!
                </Badge>
                <h1 className="text-3xl font-bold mb-4">Thank you for sharing!</h1>
                <p className="text-muted-foreground text-lg">
                    We&apos;re setting up your personalized recovery journey.
                </p>
            </div>

            {/* Progress Animation */}
            <div className="mb-12">
                <Progress value={100} className="animate-progress" />
            </div>

            {/* Personalization Cards */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Tailored Recovery Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Based on your responses, we&apos;re preparing personalized strategies and resources specific to your needs.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Health Monitoring Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            We&apos;re configuring your health tracking dashboard with relevant metrics and goals.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Wearable Integration Prompt */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Watch className="w-5 h-5" />
                        Connect Your Wearable Device
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Would you like to connect your wearable device now for enhanced tracking?
                    </p>
                    <div className="flex gap-4">
                        <Button variant="outline">Connect Device</Button>
                        <Button variant="ghost">Do this later</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Dashboard Redirect */}
            <div className="text-center">
                <Link href="/dashboard">
                    <Button size="lg" className="gap-2">
                        Go to Your Dashboard
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}