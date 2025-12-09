import { NextResponse } from "next/server";
import { addToWaitlist } from "../../lib/waitlist";


export async function POST(request: Request) {
  try {
    const { email, name, source } = await request.json();

    if (!email || !name) {
      return NextResponse.json({ error: "Email and Name are required" }, { status: 400 });
    }

    await addToWaitlist(email, name, source);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/waitlist:", err);
    return NextResponse.json(
      { error: "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}
