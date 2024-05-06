import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-[#f8f9fb] w-full d">
      <header className="bg-transparent h-[11vh] w-full">
        <div className=" flex h-16 flex-row justify-between max-w-screen-xl items-center gap-8 px-1 sm:px-4 lg:px-6">
          <a
            className="block text-teal-600 flex flex-row items-center"
            href="#"
          >
            <Image src={"/logo.png"} width={60} height={60} alt="Welcome!" />
            <span className="text-black text-xl font-semibold px-2">
              Snipshelf.dev
            </span>
          </a>
          <div className="h-5 w-10">
          <UserButton  />

          </div>
        </div>
        
      </header>
    </div>
  );
}

export default Navbar;
