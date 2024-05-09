"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';
import path from "path";

function Navbar() {
  const pathname = usePathname();
  // console.log("path name is" + pathname)

  return (
    <div className="bg-[#f8f9fb] w-full  ">
      <header className="bg-transparent h-fit w-full px-3">
        <div className=" flex h-16 flex-row justify-between  items-center gap-8 px-1 sm:px-4 lg:px-6">
          <Link
            className="block text-teal-600 flex flex-row items-center"
            href={ pathname == "/Profile" || pathname.includes("/Share") ? "/" : "/Profile" }
          >
            <Image src={"/logo.png"} width={53} height={53} alt="Welcome!" />
            <span className="text-black tracking-wide text-3xl mt-1 max-sc-400:text-2xl roboto font-[700] px-2">
              SnipIt
            </span>
          </Link>
          <div className="flex flex-row  items-center gap-6 max-sc-400:gap-3">
            <Link href={"/integration"}><div className="roboto border border-slate-200 bg-white rounded-xl p-2 cursor-pointer">
              Integration
            </div></Link>
            <div className=" mt-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
