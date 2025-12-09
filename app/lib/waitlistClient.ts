export async function submitWaitlistEmail(email: string, source: string) {
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });

  if (!res.ok) {
    throw new Error("Failed to submit waitlist email");
  }

  return res.json();
}
