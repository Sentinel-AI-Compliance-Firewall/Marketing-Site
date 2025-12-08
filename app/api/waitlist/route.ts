import { NextRequest, NextResponse } from "next/server"

// Google Sheets API configuration
// You'll need to set these environment variables:
// GOOGLE_SHEETS_ID - The ID of your Google Sheet
// GOOGLE_SERVICE_ACCOUNT_EMAIL - Service account email
// GOOGLE_PRIVATE_KEY - Service account private key

interface WaitlistEntry {
  email: string
  companyName: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistEntry = await request.json()

    // Validate email
    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Google Sheets API endpoint
    const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

    if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error("Missing Google Sheets configuration")
      // For development, we'll still return success
      console.log("Waitlist entry (not saved to sheets):", body)
      return NextResponse.json({ success: true, message: "Added to waitlist" })
    }

    // Create JWT for Google API authentication
    const jwt = await createJWT(GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY)

    // Append row to Google Sheet
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_ID}/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED`

    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[body.email, body.companyName, body.timestamp, "Waitlist"]],
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Google Sheets API error:", error)
      throw new Error("Failed to save to Google Sheets")
    }

    return NextResponse.json({ success: true, message: "Added to waitlist" })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    )
  }
}

// Create a JWT token for Google API authentication
async function createJWT(email: string, privateKey: string): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  }

  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signatureInput = `${encodedHeader}.${encodedPayload}`

  // Sign the JWT
  const signature = await signWithPrivateKey(signatureInput, privateKey)

  // First, get an access token using the JWT
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${signatureInput}.${signature}`,
    }),
  })

  const tokenData = await tokenResponse.json()
  return tokenData.access_token
}

function base64UrlEncode(str: string): string {
  const base64 = Buffer.from(str).toString("base64")
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}

async function signWithPrivateKey(data: string, privateKey: string): Promise<string> {
  const crypto = await import("crypto")
  const sign = crypto.createSign("RSA-SHA256")
  sign.update(data)
  const signature = sign.sign(privateKey, "base64")
  return signature.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
