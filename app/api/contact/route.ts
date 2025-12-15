import { NextResponse } from "next/server";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const sheetId = process.env.GOOGLE_SHEETS_ID;

  if (!privateKey || !clientEmail || !sheetId) {
    throw new Error("Missing Google Sheets environment variables");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
}

export async function POST(request: Request) {
  try {
    const { name, email, company, role, inquiryType, message } = await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID as string;

    const values = [[
      name,
      email,
      company || "",
      role || "",
      inquiryType || "general",
      message,
      new Date().toISOString(),
      "contact-form"
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "ContactForm!A:H",
      valueInputOption: "RAW",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
