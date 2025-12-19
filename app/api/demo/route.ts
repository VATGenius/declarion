import { NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

// Validation schema
const demoRequestSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  country: z.string().min(1, 'Country is required'),
  honeypot: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, {
      maxRequests: 5,
      windowMs: 60 * 1000, // 1 minute
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Honeypot check - if filled, it's a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Return success to not reveal spam detection
      return NextResponse.json({ ok: true });
    }

    // Validate input
    const validationResult = demoRequestSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((e) => e.message);
      return NextResponse.json(
        {
          ok: false,
          error: errors[0] || 'Invalid input',
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Consent check
    if (!data.consent) {
      return NextResponse.json(
        {
          ok: false,
          error: 'You must agree to the Privacy Policy',
        },
        { status: 400 }
      );
    }

    // Here you would integrate with your CRM/webhook
    // Example: Send to webhook, save to database, send email notification
    //
    // await fetch(process.env.WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     fullName: data.fullName,
    //     email: data.email,
    //     company: data.company,
    //     jobTitle: data.jobTitle,
    //     country: data.country,
    //     submittedAt: new Date().toISOString(),
    //   }),
    // });

    // Log submission (replace with actual integration)
    console.log('[Demo Request]', {
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      jobTitle: data.jobTitle,
      country: data.country,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[Demo API Error]', error);
    return NextResponse.json(
      {
        ok: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
