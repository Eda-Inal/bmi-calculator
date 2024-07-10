'use client';
import "./globals.css";
import Navbar from "./components/navbar";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
