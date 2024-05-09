import Post from "@/components/Post";
import { app } from "@/firebaseConfig";
import { time } from "console";
import { getFirestore } from "firebase/firestore";
import React from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { SnippetDataInterface } from "@/app/utills/Interfaces";

function LeftSideCard({
  user,
  SnippetData,
}: {
  user: any;
  SnippetData: SnippetDataInterface[]  ;
}) {
  const db = getFirestore(app);
  return (
    <div className="p-6 max-[350px]:p-3">
      <div className="flex flex-col  min-[800px]:w-[3/4vw]   max-[350px]:mx-5 ">
        <div className="flex flex-row justify-between mx-[2vw] mt-[2vh] items-center">
          <div className="text-4xl max-[600px]:text-3xl max-[350px]:text-2xl font-medium flex roboto  tracking-wide flex-row gap-1 items-center">
            <Bookmark className="h-18 w-17 "/> Your Snips
          </div>
        </div>

        <div className="mt-3 max-[450px]:mt-1">
          {SnippetData.length > 0 ? (
            <>
              {SnippetData.map((item: SnippetDataInterface, index) => (
                  <Post SnippetData={item} key={index} />
              ))}
            </>
          ) : (
            <><div className="mx-8 mt-10 roboto text-xl">
              Uh Oh! You do not have any Snippets !
              </div>
              <Link href={"/integration"}><div className="mx-8 roboto mt-5 text-base text-cyan-800 underline  underline-offset-2	cursor-pointer">
               add your First Snippet here! 
              </div></Link></>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSideCard;
