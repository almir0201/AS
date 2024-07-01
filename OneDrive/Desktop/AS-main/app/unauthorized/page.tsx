import { NextPage } from "next";
import Link from "next/link";

const UnAuthorized: NextPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md flex flex-col items-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>403
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Nazalost niste authorizovani da posjetite ovu stranicu
          </p>
          <Link
            href="/"
            className="button"
          >
            Pocetna stranica
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnAuthorized;