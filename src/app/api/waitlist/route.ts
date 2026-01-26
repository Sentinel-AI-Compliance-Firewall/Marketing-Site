import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!);

// Check if email already exists in Airtable
async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const records = await base("Waitlist")
      .select({
        filterByFormula: `LOWER({Email}) = "${email.toLowerCase()}"`,
        maxRecords: 1,
      })
      .firstPage();
    return records.length > 0;
  } catch {
    return false;
  }
}

// Get waitlist count from Airtable
async function getWaitlistCount(): Promise<number> {
  try {
    const records = await base("Waitlist").select().all();
    return records.length;
  } catch {
    return 0;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = "website" } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists in Airtable
    const exists = await checkEmailExists(email);
    if (exists) {
      return NextResponse.json(
        { success: true, message: "You're already on the waitlist!" },
        { status: 200 }
      );
    }

    // Add to Airtable
    await base("Waitlist").create([
      {
        fields: {
          Email: email.toLowerCase(),
          Timestamp: new Date().toISOString(),
          Source: source,
        },
      },
    ]);

    console.log(`New waitlist signup: ${email} from ${source}`);

    return NextResponse.json(
      { success: true, message: "You've been added to the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return waitlist count (for admin purposes)
  try {
    const count = await getWaitlistCount();
    return NextResponse.json({
      count,
      // Don't expose emails publicly
    });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
