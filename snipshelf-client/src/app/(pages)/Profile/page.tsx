"use client";
import React, { useEffect, useState } from "react";

import {  useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { generateAPIToken } from "@/app/utills/generatAPItoken";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RightSideCard from "./_components/RightSideCard";
import LeftSideCard from "./_components/LeftSideCard";
import { useAuth } from "@/app/context/ContextAuth";
export interface SnippetDataInterface {
  author: string;
  description: string;
  name: string;
  snippet: string;
  flames:number;
  SnipId:string;
}
function Page() {
  const db = getFirestore(app);
  const { isLoaded, isSignedIn, user } = useUser();
  const {getAllItems , allSnippets} = useAuth();



  useEffect(() => {
    if (isLoaded && isSignedIn) {
      saveUser();
      getAllItems(user);
    }
  }, [isLoaded, isSignedIn, user]);


  const saveUser = async () => {
    const q = query(
      collection(db, "Users"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      console.log("user exists");
    } else {
      console.log("user added in db");
      const token: string = generateAPIToken();

      const doc = await addDoc(collection(db, "Users"), {
        Name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.username,
        API_token: "sk_" + token,
      })
        .then((resp) => {
          console.log(resp);
          if (resp.id) {
            console.log("user registered");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }
user.imageUrl
  return (
    <div>
      <div className=" w-full flex flex-col no-scrollbar">
        <Navbar />
        <hr className="bg-[#e2e8f0cc]"></hr>

        {/* posts and right side bar */}
        <div className="mx-[1vw] flex flex-row">
          <div className="basis-2/3 mt-[2vh] ">
          <LeftSideCard user={user} SnippetData={allSnippets} />
          </div>



          {/* Right side bar */}
          <div className="basis-1/3   ">
            <RightSideCard user={user} SnippetData={allSnippets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
