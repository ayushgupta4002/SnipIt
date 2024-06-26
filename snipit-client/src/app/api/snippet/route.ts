import { app } from "@/firebaseConfig";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const db = getFirestore(app);

export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, "Snippets"));
        const usersData = querySnapshot.docs.map(doc => doc.data());

        
        // console.log(usersData[2].author)

        return NextResponse.json(usersData, { status: 200 });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.error(); // No additional options needed
    }
}


export async function POST(req : NextRequest) {
    
    try {
        const body = await req.json()
        const q = query(
            collection(db, "Users"),
            where("userId", "==", body.userId )
          );
        const querySnapshot = await getDocs(q);
        if(querySnapshot.docs.length != 0){
        const str = body.name;
        const words = str.split(/\s+/);
        const joinedString = words.join(""); 
        const slug = joinedString.replaceAll("/", "-");
    
        const data = {
            SnipId: slug +"-"+Math.floor(Math.random() * Date.now()).toString(),
            name : body.name,
            authorUserId:body.userId,
            description : body.description,
            snippet : body.snippet,
            flames:0,
            private:true,
            CreatedAt:Date.now(),
        }
        const docRef = await addDoc(collection(db, "Snippets"), data);

        return NextResponse.json({ message: "Data posted successfully", id: docRef.id }, { status: 200 });

    }else{
        return NextResponse.json({ message: "No User Found" }, { status: 404 });
    }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.error(); // No additional options needed
    }
}


