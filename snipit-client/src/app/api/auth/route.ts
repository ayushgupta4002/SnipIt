import { app } from "@/firebaseConfig";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const db = getFirestore(app);

export async function POST(req : NextRequest) {

    try {
        const body = await req.json()
       
        const q = query(collection(db, "Users"), where("API_token", "==", body.token));
        const querySnapshot = await getDocs(q);
        // console.log(usersData[2].author)
        if(querySnapshot.size == 0 || querySnapshot.size == undefined){
            return NextResponse.json(false, { status: 401 });
        }
        const data = querySnapshot.docs[0].data();
                return NextResponse.json(data, { status: 200 });


    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.error(); // No additional options needed
    }
}