import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Farhan Ali — Full-Stack Web Developer",
  description:
    "Farhan Ali is a professional Full-Stack Web Developer specializing in Next.js, React, Node.js, and Supabase. Building fast, modern, and scalable web applications.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Web Developer",
    "Freelancer",
    "Farhan Ali",
  ],
  authors: [{ name: "Farhan Ali" }],
  openGraph: {
    title: "Farhan Ali — Full-Stack Web Developer",
    description:
      "Building fast, modern, and scalable web applications for modern brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
