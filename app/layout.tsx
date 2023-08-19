import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GDC Services",
  description: "The official website of GDC Services. Let's grow your business together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        <meta name="viewport" content="width=device-width, height=device-height initial-scale=1" />
      </head>
      <body className={"text-primary bg-page-gradient dark:text-primary-dark dark:bg-body-dark " + inter.className}>
        <Header />
        <main className="pt-navigation-height">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
