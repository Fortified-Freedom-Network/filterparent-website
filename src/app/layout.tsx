import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilterParent — Emotional Protection for High-Conflict Communication",
  description:
    "AI-powered emotional protection for high-conflict communication. See what they meant, not how they said it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-deep text-body font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
