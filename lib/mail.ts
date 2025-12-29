import nodemailer from 'nodemailer';

interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

interface DemoRequestData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
}

function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.eu.mailgun.net';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
  replyTo,
}: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  const transporter = createTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!transporter || !from) {
    console.error('[Mail] Missing SMTP configuration');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo,
    });

    return { success: true };
  } catch (error) {
    console.error('[Mail] Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendDemoRequestNotification(
  data: DemoRequestData
): Promise<{ success: boolean; error?: string }> {
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'tranacher@tranacher.de';

  const subject = `New Demo Request from ${data.company}`;

  const text = `
New Demo Request

Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company}
Job Title: ${data.jobTitle}
Country: ${data.country}

Submitted at: ${new Date().toISOString()}
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #00A86A; font-size: 24px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #666; }
    .value { color: #333; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <h1>New Demo Request</h1>

    <div class="field">
      <span class="label">Name:</span>
      <span class="value">${data.fullName}</span>
    </div>

    <div class="field">
      <span class="label">Email:</span>
      <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
    </div>

    <div class="field">
      <span class="label">Company:</span>
      <span class="value">${data.company}</span>
    </div>

    <div class="field">
      <span class="label">Job Title:</span>
      <span class="value">${data.jobTitle}</span>
    </div>

    <div class="field">
      <span class="label">Country:</span>
      <span class="value">${data.country}</span>
    </div>

    <div class="footer">
      Submitted at ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: NOTIFICATION_EMAIL,
    subject,
    text,
    html,
    replyTo: data.email,
  });
}
