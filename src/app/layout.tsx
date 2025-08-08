import type { Metadata } from "next";
import { Montserrat, Ballet, Chelsea_Market } from "next/font/google";
import "./globals.css";

const chelsea = Chelsea_Market({
  variable: "--font-chelsea",
  weight: "400"
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
})

const cursive = Ballet({
  variable: "--font-cursive",
  weight: "400"
})



export const metadata: Metadata = {
  title: "Petalser",
  description: "Website development and improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cursive.variable} ${montserrat.variable} ${chelsea.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
