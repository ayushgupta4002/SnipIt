import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (

    <div className="bg-black h-screen">
      <Header/>
      <Hero/>
    </div>
   
  );
}
