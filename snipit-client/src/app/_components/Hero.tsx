import { Binary, Code, CodeXml, FileCode, RefreshCcwDot, Terminal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="bg-black text-white overflow-hidden h-[89vh]	">
      <FileCode className="-rotate-12 fixed  left-10 mt-10 " color="cyan" size={39}></FileCode>

      <CodeXml className="-rotate-12 fixed  right-12 mt-10" color="cyan" size={39}></CodeXml>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r tracking-wide  roboto from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Save.Share.Reuse
              <span className="sm:block roboto h-24 tracking-wide "> Give your code a shelf</span>
            </h1>

            <p className="mx-auto roboto font-medium  text-lg tracking-wide  max-w-4xl sm:text-xl/relaxed">
            Introducing Snipit, your go-to solution for effortlessly managing and reusing your coding components - and so much more.
            </p>

            <Link
              className="mt-8 flex flex-wrap justify-center gap-4"
              href="/Profile"
            >
              <div className="block w-full rounded border bg-slate-300 px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Get Started
              </div>
            </Link>
          </div>
          <div className="fixed left-20   rounded-full p-1 mt-9 bottom-10">  <Terminal className="rotate-1 " size={35}/></div>
        
          <Binary className="-rotate-12 fixed right-10 bottom-10" size={45}/>


        </div>
      </section>
    </div>
  );
}
