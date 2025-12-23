import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Manager | VATGenius',
  robots: 'noindex',
};

export default function AdminPage() {
  return (
    <iframe
      src="/admin/cms.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="Content Manager"
    />
  );
}
