"use client"

import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React  from "react";


function Header() {
  return (
    <header className="bg-black h-fit  ">
  <div className="mx-auto flex h-17 py-3 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600 flex flex-row items-center" href="#">
      <Image src={"/logo2.png"} width={65} height={65} alt="Welcome!" />
      <span className="text-white text-3xl mt-1  roboto font-semibold tracking-wide px-2">SnipIt</span>
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        {/* <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-white transition hover:text-gray-300" href="#"> About </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-300" href="#"> Careers </a>
          </li>

          <li>
            <a className="text-white  transition hover:text-gray-300" href="#"> History </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-300" href="#"> Services </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-300" href="#"> Projects </a>
          </li>

        
        </ul> */}
      </nav>

      <div className="flex items-center gap-4">

        <SignedOut>
        <div className="sm:flex sm:gap-4">
        <Link href={"/sign-in"}>  <div
            className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
          >
            {/* <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink> */}
            Login
          </div></Link>

        <Link href={"/sign-up"}>  <div
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-teal-600/75 sm:block"
          >
            {/* <di postLoginRedirectURL="/dashboard">Register</RegisterLink> */}
            Register
          </div></Link>
        </div>
        </SignedOut>

        {/* <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
      </div>
    </div>
  </div>
</header>
  );
}

export default Header;
