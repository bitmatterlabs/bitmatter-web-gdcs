import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/common/header";
import { Footer } from "./components/common/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "GDC Services";
const description =
  "The official website of GDC Services. Let's grow your business together.";
const creator = {
  name: "bitmatter labs",
  url: "https://bitmatterlabs.com",
};
const githubActionsWorkflow = {
  isActionRunning: process.env.GITHUB_ACTIONS || false,
  workflowName: process.env.GITHUB_WORKFLOW || "prod_deployment",
  repo: process.env.GITHUB_REPOSITORY?.toString().replace(
    new RegExp(`^${process.env.GITHUB_REPOSITORY_OWNER || ""}/`),
    ""
  ),
  repoOwner: process.env.GITHUB_REPOSITORY_OWNER,
};
const siteUrl = githubActionsWorkflow.isActionRunning
  ? githubActionsWorkflow.workflowName === "prod_deployment"
    ? `https://${githubActionsWorkflow.repoOwner}.github.io/${githubActionsWorkflow.repo}`
    : ""
  : "https://gdcservices.ae";
const appleTouchIcon = `${siteUrl}/favicon/apple-touch-icon.png`;
const androidIcon512 = `${siteUrl}/favicon/android-chrome-512x512.png`;

export const metadata: Metadata = {
  title: title,
  description: description,
  applicationName: "GDC Services Official Website",
  authors: { name: creator.name, url: creator.url },
  generator: "Next.js",
  keywords: [
    "GROWLTIC",
    "growlytic",
    "GDC Services",
    "DOCUMENTS CLEARING SERVICES",
    "GDC",
    "Business Setup in Dubai",
    "Company Formation in UAE",
    "Dubai Mainland",
    "Freezone Business Setup",
    "Offshore Company Formation",
    "Government Approvals in UAE",
    "ISO Registration Services",
    "Trademark & Attestation",
    "Professional License Dubai",
    "Industrial License UAE",
    "Tourism License Dubai",
    "10 Year UAE Golden Visa",
    "Investor-Friendly Country",
    "Long-Term Residency in UAE",
  ],
  viewport: { width: "device-width", height: "device-height", initialScale: 1 },
  creator: creator.name,
  publisher: creator.name,
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: { "en-US": siteUrl },
  },
  icons: {
    icon: androidIcon512,
    apple: appleTouchIcon,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: androidIcon512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteUrl,
    creator: creator.name,
    title: title,
    description: description,
    images: androidIcon512,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={
          "text-primary dark:text-primary-dark dark:bg-body-dark " +
          inter.className
        }
      >
        <Header />
        <main className="pt-navigation-height">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
