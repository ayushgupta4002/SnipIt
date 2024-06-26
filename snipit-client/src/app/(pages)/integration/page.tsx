import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="max-w-screen flex flex-col">
      <Navbar />
      <hr className="bg-[#e2e8f0cc]"></hr>
      <div className=" text-3xl  max-sc-400:text-2xl roboto font-semibold mt-8 flex flex-row items-center gap-4 justify-center">
        <div>Snipit for VScode</div>
        <Image src={"/vscode.png"} width={65} height={65} alt="Welcome!" />
      </div>
      <div className="text-center roboto font-medium text-lg my-4 mx-2">
        The plugin for productivity and reusability to save your time!
      </div>
      <div className="flex flex-col mt-7 mx-[13vw] max-sc-600:mx-[4vw] ">
        <div className="text-2xl  max-sc-400:text-xl  font-bold roboto ">Installation and Setup</div>
        <div className="mx-[4vw] my-[3vh]">
          <ol className="list-decimal gap-3 list-outside">
            <li className="text-xl max-sc-400:text-lg my-3 ml-2 ">
            <div className="font-normal roboto text-lg  max-sc-400:text-base  mt-3">Press F1 or <span className="border p-1 bg-slate-100 border-slate-400 font-mono rounded-lg">CMD + Shift + P</span> and type install. Pick Extensions:
              Install Extension:Snip-it. </div>
              <Image src={"/snipitMain.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

            </li>
            <li className="text-xl max-sc-400:text-lg mt-5 ml-2">
              <div className="font-semibold text-xl max-sc-400:text-lg roboto">Setup the Extension</div>
              <div className="font-medium text-lg max-sc-400:text-base font-mono ">snip:auth</div>
              <div className="font-normal text-lg max-sc-400:text-base roboto mt-3 roboto">
                press <span className="border max-sc-400:leading-9   p-1 bg-slate-100 border-slate-400 font-mono  rounded-lg">CMD + Shift + P</span> and type <code className="border p-1 bg-slate-100 border-slate-400 rounded-lg">snip:auth</code>
                <Image src={"/snip-auth.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
              <div className="font-normal max-sc-400:leading-9   roboto text-lg max-sc-400:text-base  mt-4 mb-4">
               Type your API Key and Press <code>Enter</code>,Congratulations! you are now done!
                <Image src={"/snip-auth2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
            </li>
          </ol>
        </div>

        <div className="text-2xl font-bold roboto max-sc-400:text-xl">Using</div>
        <div className="mx-[4vw]  my-[3vh] flex flex-col gap-2  ">
          <ol className="list-decimal  ">
            <li className="text-xl max-sc-400:text-lg mt-5 ml-2">
              <div className="font-medium ">To Push any Snippet</div>
              <div className="font-medium  font-mono">snip:push</div>
              <div className="font-normal text-lg  max-sc-400:leading-9  max-sc-400:max-sc-400:text-base   font-sans mt-3">
               Select any part of code that you want to save and press <span className="border p-1 bg-slate-100 border-slate-400 max-sc-400:text-sm rounded-lg font-mono">CMD + Shift + P</span>  and type <code className="border p-1  max-sc-400:text-sm bg-slate-100 border-slate-400 rounded-lg">snip:pull</code>
                <Image src={"/snip-push.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
              <div className="font-normal max-sc-400:leading-9   text-lg max-sc-400:text-base font-sans mt-4 mb-4">
                Select a Name for your Snippet and Press <code  className="border p-1 bg-slate-100 border-slate-400 rounded-lg">Enter</code> ,Congratulations! your sinppet is saved !
                <Image src={"/snip-push2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
            </li>
            <li className="text-xl pt-[4vh]  ml-2">
              <div className="font-medium max-sc-400:text-lg">To Pull any Snippet</div>
              <div className="font-medium max-sc-400:text-base font-mono">snip:pull</div>
              <div className="font-normal text-lg  max-sc-400:leading-9  max-sc-400:max-sc-400:text-base   font-sans mt-3">
                Press <span className="border p-1 bg-slate-100 border-slate-400 max-sc-400:text-sm rounded-lg font-mono">CMD + Shift + P</span>  and type <code className="border p-1  max-sc-400:text-sm bg-slate-100 border-slate-400 rounded-lg">snip:pull</code>
                <Image src={"/snip-pull.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
              <div className="font-normal max-sc-400:leading-9   text-lg max-sc-400:text-base  font-sans mt-4 mb-4">
                Select a Name for your Snippet or Choose one from the list and press <code className="font-mono border p-1 bg-slate-100 border-slate-400 rounded-lg">Enter</code>,congratulations! your have your sinppet in the file !
                <Image src={"/snip-pull2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-5"/>

              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Page;
