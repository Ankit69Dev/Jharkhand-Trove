import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import Providers from './providers';
import StyledComponentsRegistry from './registry';
import Navbar from '@/components/Navbar';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Johar Jharkhand — eco & cultural tourism',
  description:
    'Waterfalls, tribal festivals, and forest trails through Jharkhand, planned properly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}