import Head from "next/head";
import "./globals.css";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "FWB Hunt",
  description: "FWB Fest augmented reality hunt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
