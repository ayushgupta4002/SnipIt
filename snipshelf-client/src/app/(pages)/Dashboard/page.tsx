"use client"
import React, { useEffect } from "react";

import { useAuth, useUser } from "@clerk/nextjs";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import {generateAPIToken} from "@/app/utills/generatAPItoken"
function Page() {
  const db = getFirestore(app);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      saveUser();
    }
  }, [isLoaded, isSignedIn, user]);

  const saveUser = async () => {
    const q = query(collection(db, "Users"), where("email", "==", user?.primaryEmailAddress?.emailAddress));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
        console.log('user exists');
      } else {
        console.log('user added in db');
        const token:string=generateAPIToken();

        const doc = await addDoc(collection(db, "Users"), {
            Name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
             userName: user?.username,
             API_token: "sk_"+token
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

  return <div>{user.fullName?.toString()}</div>;
}

export default Page;
