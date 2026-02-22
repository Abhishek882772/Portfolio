import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});


import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${mono.variable}  font-sans`}
      >
        {children}
      </body>
    </html>
  );
}