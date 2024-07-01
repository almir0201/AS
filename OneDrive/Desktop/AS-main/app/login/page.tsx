"use client";

import { signIn } from "next-auth/react";
import Image from "next/image"

export default function Login() {

  const signInGoogle = async () => {
    signIn('google', {
      callbackUrl: '/admin'
    })
  }

  const signInGithub = async () => {
    signIn('github', {
      callbackUrl: '/admin'
    })
  }
  return (
    <>
      <section className="m-40">
        <div className="h-full">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <button onClick={signInGoogle} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-full relative">
                  <Image src="/googleicon.png" width={20} height={20} alt="" />
                </div>
                <span className="ml-4">Sign in with Google</span>
              </button>
              <button onClick={signInGithub} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div className="bg-white p-2 rounded-full relative">
                  <Image src="/githubicon.png" width={20} height={20} alt="" />
                </div>
                <span className="ml-4">Sign in with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
