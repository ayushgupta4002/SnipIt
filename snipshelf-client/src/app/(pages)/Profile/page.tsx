"use client";
import React, { useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { generateAPIToken, generateuserID} from "@/app/utills/generatAPItoken";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RightSideCard from "./_components/RightSideCard";
import LeftSideCard from "./_components/LeftSideCard";
import { useAuth } from "@/app/context/ContextAuth";
import Loader from "@/components/Loader";
export interface SnippetDataInterface {
  author: string;
  description: string;
  name: string;
  snippet: string;
  flames: number;
  SnipId: string;
}
function Page() {
  const db = getFirestore(app);
  const { isLoaded, isSignedIn, user } = useUser();
  const { getAllItems, allSnippets, loading, SetLoadingFn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      saveUser();
    }
  }, [isLoaded, isSignedIn, user]);

  const saveUser = async () => {
    SetLoadingFn();
    const q = query(
      collection(db, "Users"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      
      if (querySnapshot.docs[0].data().userName != user?.username) {
        const docRef = doc(db, "Users", querySnapshot.docs[0].id);
        await updateDoc(docRef, {
          userName: user?.username, 
        }).catch((err)=>console.log(err));
      }
      console.log("user exists");
      getAllItems(querySnapshot.docs[0].data().userId ,user?.username);

    } else {
      console.log("user added in db");
      const token: string = generateAPIToken();
      const userId : string = generateuserID(user&&user.username);

      const doc = await addDoc(collection(db, "Users"), {
        Name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.username,
        API_token: "sk_" + token,
        userId: userId
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
    SetLoadingFn();
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
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
      )}
    </div>
  );
}

export default Page;
