"use client";

import { signIn } from "next-auth/react";

export default function Login() {

  const signInGoogle = async () => {
    signIn('google', {
      callbackUrl: '/'
    })
  }

  const signInGithub = async () => {
    signIn('github', {
      callbackUrl: '/'
    })
  }
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-3 sm:p-6">
          LOGO
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button onClick={signInGoogle} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full relative">
                    GOOGLE ICON
                  </div>
                  <span className="ml-4">Sign in with Google</span>
                </button>

                <button onClick={signInGithub} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-2 rounded-full relative">
                    GIT\HUB ICON
                  </div>
                  <span className="ml-4">Sign in with GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex lg:w-1/2 xl:w-7/12 ">
          {/* <Image
            src={IMAGEURL}
            alt='Login Image'
            className='w-full h-auto object-cover object-right'
            width={1048.67}
            height={812.54}
           /> */}
        </div>
      </div>
    </div>
  </>
  );
}
