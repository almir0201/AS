"use client"

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const handleClick = (isLoggedIn, router) => {
  // console.log(isLoggedIn);
  if (!isLoggedIn) {
    router.push('/login')
  } else {
    signOut()
  }
}

function Button() {
  const { data: session } = useSession()
  const router = useRouter();
  const text = {
    0: 'PRIJAVI SE',
    1: 'ODJAVI SE'
  }

  return (
    <button className="button" onClick={() => handleClick(!!session, router)}>
      <span className="button-text">{text[Number(!!session)]}</span>
    </button>
  );
}

export default Button;
