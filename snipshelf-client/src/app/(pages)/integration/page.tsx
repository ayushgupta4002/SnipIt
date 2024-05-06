import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="max-w-screen flex flex-col">
      <Navbar />
      <hr className="bg-[#e2e8f0cc]"></hr>
      <div className=" text-3xl font-semibold mt-8 flex flex-row items-center gap-4 justify-center">
        <div>SnipShelf for VScode</div>
        <Image src={"/vscode.png"} width={65} height={65} alt="Welcome!" />
      </div>
      <div className="text-center my-4">
        The plugin for productivity, reuability and saving your time!
      </div>
      <div className="flex flex-col mt-7 mx-[13vw] ">
        <div className="text-2xl font-bold ">Installation and Setup</div>
        <div className="mx-[4vw] my-[3vh]">
          <ol className="list-decimal gap-3">
            <li className="text-lg">
              Press F1 or CMD + Shift + P and type install. Pick Extensions:
              Install Extension.
            </li>
            <li className="text-xl">
              <div className="font-medium text-xl">Setup the Extension</div>
              <div className="font-medium text-lg font-mono">snip:auth</div>
              <div className="font-normal text-lg font-sans mt-3">
                press CMD + Shift + P and type <code>snip:auth</code>
                <Image src={"/snip-auth.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
              <div className="font-normal text-lg font-sans mt-4 mb-4">
               Type your API Key and Press <code>Enter</code>,Congratulations! you are now done!
                <Image src={"/snip-push2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
            </li>
          </ol>
        </div>

        <div className="text-2xl font-bold ">Using</div>
        <div className="mx-[4vw] my-[3vh] flex flex-col gap-2  ">
          <ol className="list-decimal w-[57vw] ">
            <li className="text-xl mt-5">
              <div className="font-medium text-xl">To Push any Snippet</div>
              <div className="font-medium text-lg font-mono">snip:push</div>
              <div className="font-normal text-lg font-sans mt-3">
                Select any snippet that you want to save and press CMD + Shift +
                P and type <code>snip:push</code>
                <Image src={"/snip-push.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
              <div className="font-normal text-lg font-sans mt-4 mb-4">
                Select a Name for your Snippet and Press <code>Enter</code>,congratulations! your sinppet is saved !
                <Image src={"/snip-push2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
            </li>
            <li className="text-xl pt-[4vh]">
              <div className="font-medium text-xl">To Pull any Snippet</div>
              <div className="font-medium text-lg font-mono">snip:pull</div>
              <div className="font-normal text-lg font-sans mt-3">
                Press CMD + Shift + p and type <code>snip:pull</code>
                <Image src={"/snip-pull.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
              <div className="font-normal text-lg  font-sans mt-4 mb-4">
                Select a Name for your Snippet or cChoose one from the list and Press <code>Enter</code>,congratulations! your have your sinppet in the file !
                <Image src={"/snip-pull2.jpg"} width={700} height={300} alt="Welcome!"  className="mt-2"/>

              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Page;
