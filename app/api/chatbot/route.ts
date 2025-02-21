import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { message } = await req.json()

        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: message }],
            }),
        })

        const data = await response.json()
        return NextResponse.json({ reply: data.choices[0].message.content })
    } catch (error) {
        console.error("Error:", error)
        return NextResponse.json({ reply: "Sorry, I couldn't process that." })
    }
}