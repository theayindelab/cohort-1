import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, background, interests, message } = body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jo@heallyhub.com',
      subject: `New Cohort 2 Application from ${name}`,
      html: `
        <h2>New Application for AYINDE Lab Cohort 2</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Background:</strong></p>
        <p>${background}</p>
        <p><strong>Research Interests:</strong></p>
        <p>${interests}</p>
        <p><strong>Additional Message:</strong></p>
        <p>${message || 'No additional message provided.'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 