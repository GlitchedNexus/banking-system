import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon banking is a modern web banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        // We now make the fonts accesible to our entire application.
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
