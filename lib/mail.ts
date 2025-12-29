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

export async function sendEmail({
  to,
  subject,
  text,
  html,
  replyTo,
}: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const from = process.env.MAILGUN_FROM || process.env.SMTP_FROM;
  const region = process.env.MAILGUN_REGION || 'eu'; // 'eu' or 'us'

  console.log('[Mail] Config:', {
    domain: domain || 'NOT SET',
    from: from || 'NOT SET',
    apiKey: apiKey ? '***SET***' : 'NOT SET',
    region,
  });

  if (!apiKey || !domain || !from) {
    console.error('[Mail] Missing Mailgun configuration');
    return { success: false, error: 'Email service not configured' };
  }

  const baseUrl = region === 'eu'
    ? 'https://api.eu.mailgun.net/v3'
    : 'https://api.mailgun.net/v3';

  const url = `${baseUrl}/${domain}/messages`;

  const formData = new URLSearchParams();
  formData.append('from', from);
  formData.append('to', to);
  formData.append('subject', subject);
  formData.append('text', text);
  if (html) {
    formData.append('html', html);
  }
  if (replyTo) {
    formData.append('h:Reply-To', replyTo);
  }

  console.log('[Mail] Sending to:', to, 'via', url);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const responseText = await response.text();
    console.log('[Mail] Response status:', response.status);
    console.log('[Mail] Response body:', responseText);

    if (!response.ok) {
      console.error('[Mail] Mailgun error:', responseText);
      return { success: false, error: `Mailgun error: ${response.status}` };
    }

    console.log('[Mail] Email sent successfully');
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
