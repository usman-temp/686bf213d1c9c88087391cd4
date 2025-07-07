import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Implement actual email sending logic here
    // Example using nodemailer or your email service
    console.log('Received contact form submission:', body);
    
    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
