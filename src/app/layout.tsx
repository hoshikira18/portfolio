import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/ui/NavBar';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kira Tran',
  description: "Welcome to my portfolio website. I'm a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} h-screen antialiased flex flex-col lg:flex-row`}>
        <main className="flex-1 order-0 lg:order-1">{children}</main>
        <NavBar />
      </body>
    </html>
  );
}
