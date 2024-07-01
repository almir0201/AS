// These styles apply to every route in the application
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import AuthStatus from "@/components/auth-status";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-white">
      <div className="bg-blue-950">
      <Header />
      </div>
        {children}
    </div>
  );
}
