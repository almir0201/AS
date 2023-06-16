import { getServerSession } from "next-auth/next";
import SignOut from "./sign-out";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex flex-col items-center">
      {session && (
        <>
          <p className="text-stone-200 text-sm mb-3">
            Signed in as {session.user?.email}
          </p>
          <SignOut />
        </>
      )}
    </div>
  );
}
