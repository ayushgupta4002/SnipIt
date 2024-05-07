import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-[#f8f9fb] w-full ">
      <header className="bg-transparent h-[11vh] w-full">
        <div className=" flex h-16 flex-row justify-between  items-center gap-8 px-1 sm:px-4 lg:px-6">
          <Link
            className="block text-teal-600 flex flex-row items-center"
            href={"/Profile"}
          >
            <Image src={"/logo.png"} width={60} height={60} alt="Welcome!" />
            <span className="text-black tracking-wide text-2xl roboto font-[500] px-2">
              Snipit
            </span>
          </Link>
          <div className="flex flex-row items-center gap-6">
            <Link href={"/integration"}><div className="border border-slate-400 roboto rounded-xl p-2 cursor-pointer">
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
