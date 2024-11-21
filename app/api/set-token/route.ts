import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const { accessToken } = await request.json(); // Get access token from next client

    try {
        if (accessToken) {
            const response = NextResponse.json({ accessToken }, { status: 200 });

            const cookieStore = cookies()
            cookieStore.set("at", accessToken, {
                httpOnly: true,
                maxAge: 60 * 30,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/"
            })

            return response;
        }
    } catch (err) {
        return NextResponse.json({ message: "Input data is invalid" }, { status: 400 });
    }

    return NextResponse.json({ message: "Access token is required" }, { status: 400 });
}
