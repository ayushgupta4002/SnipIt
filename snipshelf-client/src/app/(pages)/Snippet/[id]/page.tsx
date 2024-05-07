"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, Check, CroissantIcon, Cross, Edit, Edit2Icon, X } from "lucide-react";
import Link from "next/link";
import PostActions from "@/components/PostActions";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import RightSideCard from "../../Profile/_components/RightSideCard";
import Navbar from "@/components/Navbar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/ContextAuth";
import Loader from "@/components/Loader";
import { Input } from "@/components/ui/input";
import { SnippetDataInterface } from "@/app/utills/Interfaces";

function Page({ params }: any) {
  const router = useRouter();

  const [SnippetData, SetSnippetData] = useState<SnippetDataInterface>();
  const [Edit, SetEdit] = useState<boolean>(false);

  const [Description, SetDescription] = useState<string>("");
  const [Name, SetName] = useState<string>("");

  const [Id, setId] = useState<any>();
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
    setId(doc.id);
    SetName(doc.data().name);
    SetDescription(doc.data().description);

    SetLoading(false);
  };
 

  const saveData = async () => {
    console.log(Id);
    console.log(Description);
    const docRef = doc(db, "Snippets", Id);

    await updateDoc(docRef, {
      description: Description,
      name:Name
    })
      .then((resp) => {
        console.log("document updated with response : " + resp);
      })
      .catch((error) => {
        console.log(error);
      });
    getData();

    SetEdit(false);
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

            <div className="flex flex-row  ml-5 mt-4">
              <div className="flex flex-col basis-3/4 mx-10">
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
                      {/* 7hr ago */}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-8  text-2xl font-semibold"
                  id="headerTite"
                >
                  {Edit ? (
                    <><div className="mt-5 flex w-[70%] flex-row gap-3 items-end	">
                    <Input
                      className="bg-transparent font-medium text-base p-2 border rounded-lg border-slate-300 "
                      placeholder="Type a Name here!"
                      value={Name}
                      onChange={(e) => SetName(e.target.value)}
                    />
                    
                  </div></>
                  ) : (
                    <>
                      {SnippetData?.name === "" ? (
                        <>
                          <div
                            className=" mt-3 text-lg roboto  text-cyan-800 underline font-medium underline-offset-2	cursor-pointer"
                            onClick={() => {
                              SetEdit((prev) => !prev);
                            }}
                          >
                            Add a Name for the Snippet !
                          </div>
                        </>
                      ) : (
                        <>{SnippetData?.name}</>
                      )}
                    </>
                  )}
                </div>
                <div className="mt-3 mb-5 flex flex-row items-center gap-2  text-base font-normal">
                  <div className="w-[70%]">
                    {Edit ? (
                      <>
                        <div className="mt-5   	">
                          <Textarea
                            className="bg-transparent border-slate-300 "
                            placeholder="Type your Description here!"
                            value={Description}
                            onChange={(e) => SetDescription(e.target.value)}
                          />
                          <div className=" flex flex-row gap-3 justify-end ">
                            <Button
                              variant="outline"
                              className="bg-transparent rounded-full mt-2 roboto text-base w-fit"
                              onClick={() => {
                                SetEdit((prev) => !prev);
                              }}
                            >
                              cancel
                            </Button>
                            <Button
                              variant="outline"
                              className="bg-transparent roboto rounded-full mt-2  text-base w-fit"
                              onClick={saveData}
                            >
                              save
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {SnippetData?.description && SnippetData?.description.length <2 ? (
                          <>
                            <div
                              className=" mt-3 text-lg roboto text-cyan-800 underline  underline-offset-2	cursor-pointer"
                              onClick={() => {
                                SetEdit((prev) => !prev);
                              }}
                            >
                              Add Description!
                            </div>
                          </>
                        ) : (
                          <div className="  w-[90%] roboto font-[400] ">
                            
                            {SnippetData?.description}
                          </div>
                        )}
                      </>
                    )}{" "}
                  </div>

                  {Edit || SnippetData?.description == "" ? (
                    <></>
                  ) : (
                    <>
                      <div
                        className="border broder-slate-500 rounded-full p-1 cursor-pointer"
                        onClick={() => {
                          SetEdit((prev) => !prev);
                        }}
                      >
                        <Edit2Icon size={20} />
                      </div>
                    </>
                  )}
                </div>
                <div className="ml-1 ">
                  {SnippetData ?<PostActions SnippetData={SnippetData} /> : <></>}
          
                </div>
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

              <div className="basis-1/4 m-4"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Page;
