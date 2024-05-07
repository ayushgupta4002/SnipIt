import { Code, Flame } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import APiKeyField from "./APiKeyField";
import FlamesComponent from "./FlamesComponent";
import { SnippetDataInterface } from "@/app/utills/Interfaces";


function RightSideCard({ user,SnippetData }: { user: any , SnippetData: SnippetDataInterface[] }) {
  return (
    <div className="flex sticky top-0 w-full  flex-row ">
      <hr className="w-[1px] h-screen bg-[#e2e8f0cc]"></hr>
      <div className="bg-transparent h-fit flex flex-col w-full m-5  pt-[5vh] rounded-xl">
        <Image
          src={user.imageUrl}
          width={80}
          height={80}
          alt="Welcome!"
          className="mx-4  rounded-full"
        />
        <div className="font-bold text-black roboto text-left text-2xl	 py-4 px-4">
          {user.fullName}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row px-4 gap-3">
            {/* <div className="text-black text-left 	">Username :</div> */}
            <div className="text-black text-left text-sm roboto text-slate-600 font-normal ">
              @{user.username}
            </div>
          </div>
          <div className="flex flex-row px-4 gap-3">
            {/* <div className="text-black text-left 	">Email :</div> */}
            <div className="text-black text-left text-sm roboto text-slate-600 font-normal  ">
              {user?.primaryEmailAddress?.emailAddress}
            </div>
          </div>
        </div>

        <hr className="h-[1px] mx-4 mt-5 border-0 dark:bg-gray-700 bg-slate-600"></hr>
      <FlamesComponent/>
        <hr className="h-[1px] mx-4 mt-2 border-0 dark:bg-gray-700 bg-slate-600"></hr>

        <div className="px-4 mt-8 mb-4 text-base text-black roboto">Snipit API Token :</div>
        <APiKeyField user={user}/>
      </div>
    </div>
  );
}

export default RightSideCard;
