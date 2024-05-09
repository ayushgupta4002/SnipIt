import { useAuth } from '@/app/context/ContextAuth'
import { Code, Flame } from 'lucide-react'
import React from 'react'

function FlamesComponent() {
  const {allSnippets, flameCount}= useAuth()
  
  return (
    <div>  <div className="mx-4 mt-4 mb-4 flex flex-row gap-7 itesm-center  justify-center">
    {/* <div className="flex flex-col justify-center items-center ">
      <div className="font-semibold text-lg flex flex-row items-center gap-1 ">
        <Flame className="w-6 h-5" />
        {flameCount}
      </div>
      <div className="text-base font-normal text-slate-800">
        Flames Earned
      </div>
    </div> */}
    <div className="flex flex-col justify-center items-center  ">
      <div className="font-semibold text-lg flex flex-row items-center gap-1 ">
        <Code className="w-6 h-5" />
        {allSnippets.length}
      </div>
      <div className="md:text-base text-sm font-normal text-slate-800">
        Snippets Posted
      </div>
    </div>
  </div></div>
  )
}

export default FlamesComponent