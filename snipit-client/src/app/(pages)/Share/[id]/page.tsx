"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { SnippetDataInterface } from "@/app/utills/Interfaces";
import {timeAgo} from "@/app/utills/DateUtility"
function Page({ params }: any) {
  const router = useRouter();

  const [SnippetData, SetSnippetData] = useState<SnippetDataInterface>();
  const [Description, SetDescription] = useState<string>("");
  const [Name, SetName] = useState<string>("");
  const [Loading, SetLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const handleLineClick = (index: number) => {
    setSelectedLine(index === selectedLine ? null : index);
  };

  const db = getFirestore(app);
  useEffect(() => {
    console.log(params);

    getData();
   

  }, [params]);

  const getData = async () => {
    const q = query(
      collection(db, "Snippets"),
      where("SnipId", "==", params.id)
    );
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];
    const q2 = query(
      collection(db, "Users"),
      where("userId", "==", querySnapshot.docs[0].data().authorUserId)
    );
    const querySnapshotforUser = await getDocs(q2);
    const docUser = querySnapshotforUser.docs[0];
    SetSnippetData({
      author: docUser.data().userName,
      ...doc.data(),
    } as SnippetDataInterface);
    SetName(doc.data().name);
    SetDescription(doc.data().description);

    SetLoading(false);
  };
 


  return (
    <>
      {Loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="min-h-screen max-h-full max-w-screen flex flex-col no-scrollbar pb-5  ">
            <Navbar />
            <hr className="bg-[#e2e8f0cc]"></hr>

            <div className="flex flex-col mt-5">
              <div className="flex flex-col mr-5 w-fit px-10  ">
                <div className="flex flex-row items-center gap-4">
                  <div
                    className="rounded-full bg-[#e2e8f0cc]   cursor-pointer  p-2 "
                    onClick={() => router.back()}
                  >
                    <ArrowLeft />
                  </div>
                  <div className="text-base  roboto text-lg font-medium flex flex-col justify-center  ">
                    user/{SnippetData?.author}
                    <div className="text-sm font-normal text-[#c6bedc]">
                      {timeAgo(SnippetData?.CreatedAt)}                    </div>
                  </div>
                  
                </div>
                
                <div
                  className="mt-8  text-2xl font-semibold"
                  id="headerTite"
                >
                  
                    <>
                      {SnippetData?.name === "" ? (
                        <>
                          <div
                            className=" mt-3 text-lg roboto  text-cyan-800 underline font-medium underline-offset-2	cursor-pointer"
                          >
                            Add a Name for the Snippet !
                          </div>
                        </>
                      ) : (
                        <>{SnippetData?.name}</>
                      )}
                    </>
                  
                </div>
                <div className="mt-3 mb-5 flex flex-row items-center gap-2  text-base font-normal">
                  <div className="w-[90vw]">
                   
                    
                      <>
                        {SnippetData&&SnippetData?.description.length <2 ? (
                          
                          <>
                            <div
                              className=" mt-3 text-lg roboto text-cyan-800 underline  underline-offset-2	cursor-pointer"
                            
                            >
                              No Description!
                            </div>
                          </>
                        ) : (
                          <div className="   roboto font-[400] ">
                            
                            {SnippetData?.description} 
                          </div>
                        )}
                      </>
                  
                  </div>

                
                </div>
               
                  
                  
          
                </div> 
                <div className="px-10">

                
                <div className="ml-1 mt-8 mb-1 font-semibold">Code :</div>
                <div className="rounded-sm mb-7 bg-[#f8f9fb]  border border-slate-300  ">
                  <code>
                    <pre
                      className="font-medium"
                      style={{ counterReset: "line" }}
                    >
                      {SnippetData?.snippet.split("\n").map((line, index) => (
                        <div
                          key={index}
                          className="flex items-center "
                          onClick={() => handleLineClick(index)}
                        >
                          <div
                            className={`${
                              selectedLine === index
                                ? "w-10 text-left bg-cyan-300 text-black pl-1"
                                : "w-10 text-left bg-[#dcdcdc] text-black pl-1"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div
                            className={`${
                              selectedLine === index ? "bg-cyan-100 w-full" : ""
                            }`}
                          >
                            {line}
                          </div>
                        </div>
                      ))}
                    </pre>
                  </code>
                </div>
              </div>
              </div>

             
            </div>
        </>
      )}
    </>
  );
}
export default Page;
