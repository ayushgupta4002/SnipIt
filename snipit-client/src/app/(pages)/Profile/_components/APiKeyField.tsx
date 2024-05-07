"use client";
import { useAuth } from "@/app/context/ContextAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { app } from "@/firebaseConfig";
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function APiKeyField({user}:{user:any}) {
const db = getFirestore(app)
  const [showPassword, setShowPassword] = useState(false);
  const {api , getUser}=useAuth();
  useEffect(()=>{
    getUser(user)
  },[user])
 

  return (

    <div className="flex flex-row px-4 ">
      <Input
        type={showPassword ? "text" : "password"}
        className="rounded-sm focus:outline-none  border  border-slate-400"
        value={api}
        readOnly={true}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className=" px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}

export default APiKeyField;
