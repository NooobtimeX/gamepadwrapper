import { ThemeProvider } from "@/components/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "@nooobtimex/gamepadwrapper",
  description:
    "A typeScript class that simplifies the process of managing gamepads in the browser using the Gamepad API",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "@nooobtimex/gamepadwrapper",
    description:
      "A typeScript class that simplifies the process of managing gamepads in the browser using the Gamepad API",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "@nooobtimex/gamepadwrapper",
    description:
      "A typeScript class that simplifies the process of managing gamepads in the browser using the Gamepad API",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
