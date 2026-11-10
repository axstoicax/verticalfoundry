import './globals.css';

// Explicit responsive viewport and official brand browser chrome color.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F2EC',
  colorScheme: 'light',
};

const SITE_URL = 'https://getverticalfoundry.com';
const TITLE = 'VerticalFoundry | Business Systems Built for Your Industry';
const DESCRIPTION =
  'Practical, industry-specific systems for small service businesses — designed to help owners run smarter, look professional, and grow with confidence. Coming soon.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['business systems', 'service business tools', 'pricing calculators', 'business operations'],
  applicationName: 'VerticalFoundry',
  authors: [{ name: 'Quant Data Intelligence LLC', url: 'https://www.quantdataintel.com/' }],
  creator: 'Quant Data Intelligence LLC',
  publisher: 'Quant Data Intelligence LLC',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'VerticalFoundry',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VerticalFoundry — Business Systems Built for Your Industry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
