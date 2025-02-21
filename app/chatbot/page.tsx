"use client"

import Navbar from "@/components/navbar"
import { useState } from "react"

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I support you today? 😊", sender: "bot" },
    ])
    const [input, setInput] = useState("")

    const handleSend = async () => {
        if (input.trim() === "") return

        const userMessage = { text: input, sender: "user" }
        setMessages([...messages, userMessage])
        setInput("")

        try {
            const response = await fetch("/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            })

            const data = await response.json()
            if (response.ok) {
                setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }])
            } else {
                console.error("Error:", data.error)
            }
        } catch (error) {
            console.error("API request failed:", error)
        }
    }

    return (
        <div className="relative min-h-screen">
            {/* Background Gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto max-w-2xl px-4 py-16">
                    <h1 className="text-center text-3xl font-bold text-foreground">AI Chatbot</h1>
                    <p className="text-center text-muted-foreground">Your 24/7 Peer Support Companion</p>

                    {/* Chatbox */}
                    <div className="mt-6 space-y-4 rounded-lg bg-background p-6 shadow-lg ring-1 ring-border/30">
                        <div className="h-96 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-lg max-w-xs ${msg.sender === "bot"
                                        ? "bg-blue-500/90 text-white self-start"
                                        : "bg-muted text-foreground self-end ml-auto"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Box */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 rounded-lg border bg-background p-3 text-foreground placeholder-muted-foreground outline-none"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
                                onClick={handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
