import { Flame, Share, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import React from 'react'

function PostActions({flames}:{flames:number}) {
  return (
    <div className="flex flex-row mt-3 gap-3 items-start">
    {/* <div className="flex flex-col jutsify-center items-center gap-1">
      <div className="rounded-full   bg-slate-200  cursor-pointer  flex flex-col p-2">
        <Flame className="h-5 w-5"  />
      </div>
      <div className="text-sm text-black" >{flames}</div>
    </div> */}
  
    <div className="rounded-full px-3  h-fit w-fit   bg-slate-200 items-center cursor-pointer  flex flex-row p-2">
       <Share className="m-1 h-4 w-4"/> <div className="text-sm">Share</div>
      </div>
    
  </div>  )
}

export default PostActions