import { NextResponse } from "next/server";
import { auth } from "@/auth";

const DASHBOARD_API_URL = process.env.DASHBOARD_API_URL || "http://localhost:8000";

export async function POST() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const { name, email } = session.user;
    const accessToken = (session.user as any).accessToken;

    if (!accessToken) {
      return NextResponse.json(
        { error: "No access token available" },
        { status: 401 }
      );
    }

    // Call dashboard backend: POST /login
    const response = await fetch(`${DASHBOARD_API_URL}/login`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name || "",
        email: email || "",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Dashboard backend error:", errorText);
      return NextResponse.json(
        { error: "Dashboard login failed" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      session_token: data.session_token,
      user: data.user || null,
    });
  } catch (error) {
    console.error("Dashboard login error:", error);
    return NextResponse.json(
      { error: "Failed to connect to dashboard" },
      { status: 502 }
    );
  }
}
