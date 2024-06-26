"use client";
import {
  collection,
  getDocs,
  where,
  query,
  getFirestore,
  updateDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "@/firebaseConfig";
import { SnippetDataInterface } from "../utills/Interfaces";
interface AuthContextType {
  api: any;
  allSnippets: SnippetDataInterface[];
  getUser: any;
  getAllItems: any;
  flameCount: number; 
  loading:boolean;
  SetLoadingFn:any;
  LoadingFalse :any;// Adjust the type according to your needs
  LoadingTrue:any;
  changeAllSnippets:any
}

const AuthContext = createContext<AuthContextType>({
  api: null,
  allSnippets: [],
  getUser: () => {},
  getAllItems: () => {},
  flameCount: 0,
  loading:false,
  SetLoadingFn:()=>{},
  LoadingFalse : ()=>{},
  LoadingTrue:()=>{},
  changeAllSnippets:()=>{}
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const db = getFirestore(app);
  const [Loading, SetLoading]= useState<boolean>(false)
  const [ApiKey, setApiKey] = useState<string>();
  const [AllUserSnippets, setAllUserSnippets] = useState<
    SnippetDataInterface[]
  >([]);
  const [flameCount, SetflameCount] = useState<number>(0);

  const getUserData = async (user: any) => {
    try {
      const q = query(
        collection(db, "Users"),
        where("userName", "==", user?.username)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        console.log(doc.data());
        setApiKey(doc.data().API_token);
      } else {
        console.log("No matching documents.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllItems = async (userId: any ,username:string) => {
    try {
      const q = query(
        collection(db, "Snippets"),
        where("authorUserId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      const data = querySnapshot.docs.map((doc) => {
        const flames = doc.data().flames || 0; // default to 0 if flames is undefined
        SetflameCount((prev) => prev + flames);
        return {
          id: doc.id,
          author : username,
          ...doc.data(),
        } as unknown as SnippetDataInterface;
      });

      setAllUserSnippets(data);
      console.log(AllUserSnippets);
    } catch (error) {
      console.log(error);
    }
  };

  const Loadingfn= async() =>{
    SetLoading((prev)=>!prev)
  }
  const LoadingFalse= async() =>{
    SetLoading((prev)=>prev=false)
  }
  const LoadingTrue= async() =>{
    SetLoading((prev)=>prev=true)
  }


  const changeAllSnippets =async (dataid:string ) =>{
    console.log("del function called")
    const updatedSnippets = AllUserSnippets.filter(
      (snippet) => snippet.SnipId !== dataid
    );
    setAllUserSnippets(updatedSnippets)


  }
  const value = {
    api: ApiKey,
    allSnippets: AllUserSnippets,
    getUser: getUserData,
    getAllItems: getAllItems,
    flameCount: flameCount,
    loading:Loading,
    SetLoadingFn:Loadingfn,
    LoadingFalse :LoadingFalse,
    LoadingTrue:LoadingTrue,
    changeAllSnippets:changeAllSnippets
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
