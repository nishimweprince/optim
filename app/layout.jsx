import './globals.css';
import { DM_Sans } from 'next/font/google';

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Optim | Printing and Branding House in Kigali, Rwanda',
  description:
    'Optim is a full-service printing and branding house in Kigali: graphic design, large-format printing, laser cutting and engraving, and complete brand identities.',
  icons: {
    icon: '/optim-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
