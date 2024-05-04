import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="bg-black text-white overflow-hidden h-[89vh]	">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Save.Share.Reuse
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Save and Share your reusabe code snippets with ease !
            </p>

            <Link
              className="mt-8 flex flex-wrap justify-center gap-4"
              href="/dashboard"
            >
              <div className="block w-full rounded border bg-slate-300 px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
