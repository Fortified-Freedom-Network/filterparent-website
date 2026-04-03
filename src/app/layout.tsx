import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilterParent — Emotional Protection for High-Conflict Communication",
  description:
    "AI-powered emotional protection for high-conflict communication. See what they meant, not how they said it.",
  openGraph: {
    title: "FilterParent",
    description: "AI-powered emotional protection for high-conflict communication. See what they meant, not how they said it.",
    url: "https://filterparent.com",
    siteName: "FilterParent",
    images: [
      {
        url: "https://filterparent.com/images/og-image.png",
        width: 1536,
        height: 1024,
        alt: "FilterParent — AI-Powered Emotional Protection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FilterParent",
    description: "AI-powered emotional protection for high-conflict communication.",
    images: ["https://filterparent.com/images/og-image.png"],
  },
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
