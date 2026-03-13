import { NextRequest, NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || 'Ov23ctpenmmrCrIFvu3F';
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    // Redirect to GitHub OAuth
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
    authUrl.searchParams.set('scope', 'repo,user:email');
    authUrl.searchParams.set('redirect_uri', `${request.nextUrl.origin}/api/auth`);

    return NextResponse.redirect(authUrl.toString());
  }

  // Exchange code for access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return new NextResponse(`Error: ${tokenData.error_description}`, { status: 400 });
  }

  // Return the token to the CMS via postMessage
  const tokenJson = JSON.stringify({ token: tokenData.access_token, provider: 'github' });
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Authorizing...</title>
      </head>
      <body>
        <script>
          (function() {
            if (!window.opener) {
              document.body.innerText = 'Authorization complete. You can close this window.';
              return;
            }
            function receiveMessage(e) {
              window.opener.postMessage(
                'authorization:github:success:' + JSON.stringify(${tokenJson}),
                e.origin
              );
              window.removeEventListener("message", receiveMessage, false);
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
          })();
        </script>
      </body>
    </html>
  `;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/html' },
  });
}
