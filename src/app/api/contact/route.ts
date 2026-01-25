import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("Name") as string;
    const email = formData.get("Email") as string;
    const message = formData.get("Mesage") as string; // Note: "Mesage" is the field name from Framer (typo in original)

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the submission (you can replace this with your email service)
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with your email service here
    // Examples:
    // - SendGrid: await sendgrid.send({ to: 'team@sentinelai.com', ... })
    // - Resend: await resend.emails.send({ to: 'team@sentinelai.com', ... })
    // - Nodemailer: await transporter.sendMail({ to: 'team@sentinelai.com', ... })

    // Return success response in the format Framer FormContainer expects
    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
