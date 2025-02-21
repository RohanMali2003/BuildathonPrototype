import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center gap-4 py-8 text-center">
                <h2 className="font-bold">ReLive</h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                    AI-powered support for addiction recovery and mental well-being. Combining predictive insights,
                    secure prescriptions, and personalized coping strategies.
                </p>
                <div className="flex space-x-6">
                    <Link href="https://docs.google.com/presentation/d/1ITZDRjiCUzMF_g_-1QC-or_0GGXeB0s__rYWMFnI5t4/edit?usp=sharing" className="text-muted-foreground transition-colors hover:text-primary">
                        Project Presentation
                    </Link>
                    <Link href="https://www.youtube.com/@0080ROHANMALI" className="text-muted-foreground transition-colors hover:text-primary">
                        Watch Demo
                    </Link>
                </div>
                <div className="border-t w-full pt-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ReLive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
