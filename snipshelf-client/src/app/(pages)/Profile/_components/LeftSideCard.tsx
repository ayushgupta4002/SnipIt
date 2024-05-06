import Post from "@/components/Post";
import { app } from "@/firebaseConfig";
import { time } from "console";
import { getFirestore } from "firebase/firestore";
import React from "react";
import { SnippetDataInterface } from "../page";
import Link from "next/link";

function LeftSideCard({
  user,
  SnippetData,
}: {
  user: any;
  SnippetData: SnippetDataInterface[]  ;
}) {
  const db = getFirestore(app);
  return (
    <div className="p-6">
      <div className="flex flex-col w-[3/4vw] mx-10 ">
        <div className="flex flex-row justify-between mx-[2vw] mt-[2vh] items-center">
          <div className="text-4xl font-semibold flex flex-row gap-1 items-center">
            Your SnipShelf
          </div>
        </div>

        <div className="mt-3">
          {SnippetData.length > 0 ? (
            <>
              {SnippetData.map((item: SnippetDataInterface, index) => (
                <Link href={`/Snippet/${item.SnipId}`} key={index}>
                  <Post SnippetData={item} />
                </Link>
              ))}
            </>
          ) : (
            <><div className="mx-8 mt-10 text-xl">
              Uh Oh! You don't have any Snippets !
              </div>
              <Link href={"/integration"}><div className="mx-8 mt-5 text-base text-cyan-800 underline  underline-offset-2	cursor-pointer">
               add your First Snippet here! 
              </div></Link></>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSideCard;
