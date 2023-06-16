// These styles apply to every route in the application
import "@/styles/globals.css";
import "../scss/main.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Header />
        <Suspense fallback="Loading...">
          <div className={session ? "relative pt-24" : ""}>
          {/* @ts-expect-error Async Server Component */}
            <AuthStatus  />
          </div>
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
