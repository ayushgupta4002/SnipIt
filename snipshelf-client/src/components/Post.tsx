import { Share, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import React from "react";
import PostActions from "./PostActions";
import { SnippetDataInterface } from "@/app/utills/Interfaces";



function Post({
    SnippetData,

}: {
    SnippetData: SnippetDataInterface;

}) {
  return (
    <>
      <hr
        className="h-[1px] mr-6 mt-7 border-0 dark:bg-gray-700 bg-[#e2e8f0cc]"
       
      ></hr>
      <div className="h-fit bg-[#f8f9fb] rounded-xl flex flex-col p-4 my-5 cursor-pointer mx-2">
        <div className="text-sm font-normal text-black ">@{SnippetData.author}</div>
        <div className="text-xl font-semibold my-2 ">
{SnippetData.name}      </div>

        <div className="text-base font-normal my-2 text-slate-800 ">
          {SnippetData.description== "" ? <> {SnippetData.snippet.substring(0, 40)}...</> : <> {SnippetData.description.substring(0, 40)}...</>}
       
</div>

     <PostActions SnippetData={SnippetData}/>
        <div></div>
      </div>
    </>
  );
}

export default Post;
