import { app } from "@/firebaseConfig";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const db = getFirestore(app);

export async function  POST(req : NextRequest) {
    try {
        const body = await req.json()
        // const querySnapshot = await getDocs(collection(db, "Snippets"));

        const q = query(
            collection(db, "Snippets"),
            where("authorUserId", "==", body.userId )
          );
          const querySnapshot = await getDocs(q);
          const usersData = querySnapshot.docs.map(doc => doc.data());

        // console.log(usersData[2].author)

        return NextResponse.json(usersData, { status: 200 });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.error(); // No additional options needed
    }
}
