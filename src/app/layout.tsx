import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--montserrat" 
});


export const metadata: Metadata = {
  title: "SEDENA: Web Trucks",
  description: "A webapp for managing trucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${montserrat.variable} 
        ${montserrat.className} 
        min-h-screen 
        bg-background 
        font-sans 
        antialiased
      `}>
        {children}
      </body>
    </html>
  );
}
