import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site-config";
import { ThemeProvider } from "@/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: {
    template: "%s | " + siteConfig.title,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${poppins.variable} ${playfairDisplay.variable}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
