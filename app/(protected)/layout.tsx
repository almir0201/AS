// These styles apply to every route in the application
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import AuthStatus from "@/components/auth-status";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="bg-red-300">
      <Header />
      <Suspense fallback="Loading...">
        <div className={session ? "relative pt-24" : ""}>
          {/* @ts-expect-error Async Server Component */}
          <AuthStatus />
        </div>
      </Suspense>
      {children}
      <Footer />
    </div>
  );
}
