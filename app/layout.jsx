import './globals.css';
import { DM_Sans } from 'next/font/google';

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Optim | Full-Service Marketing Agency in Kigali, Rwanda',
  description:
    'Optim is a full-service marketing agency in Kigali: strategy, brand, content, digital and print, planned together and produced under one roof.',
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
