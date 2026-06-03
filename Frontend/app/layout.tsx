import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RSG Associates — Premier Legal Counsel in New Delhi",
  description: "Full-service law firm led by Ravi S. Gupta (AOR), offering expertise in Supreme Court litigation, corporate law, and complex dispute resolution.",
  authors: [{ name: "RSG Associates" }],
  openGraph: {
    title: "RSG Associates",
    description: "Trusted legal partners with decades of expertise in Indian Jurisprudence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
