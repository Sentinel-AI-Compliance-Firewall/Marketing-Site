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

export async function addToWaitlist(email: string, name: string, source?: string, companyName?: string) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_ID as string;

  const values = [[email, name || "", source || "unknown", companyName || "", new Date().toISOString()]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:E",
    valueInputOption: "RAW",
    requestBody: { values },
  });
}
