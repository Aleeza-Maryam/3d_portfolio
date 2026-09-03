import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // For now, just log the message
    // In production, you would send an email here
    console.log("📧 New Contact Form Submission:");
    console.log(`From: ${name} (${email})`);
    console.log(`Message: ${message}`);

    // You can replace this with actual email sending
    // For now, we'll simulate a successful send
    return NextResponse.json(
      { success: true, message: "Message received!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}