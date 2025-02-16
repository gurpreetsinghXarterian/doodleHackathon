import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doodle Hackathon",
  description: "Generated AI Doodle Match Innings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
