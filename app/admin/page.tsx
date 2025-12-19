'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager | VATGenius</title>
      </head>
      <body>
        <div id="nc-root" />
      </body>
    </html>
  );
}
