import { useAuth } from "@/app/context/ContextAuth";
import { SnippetDataInterface } from "@/app/utills/Interfaces";
import { app } from "@/firebaseConfig";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Copy, Flame, Share, Trash } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useRouter , usePathname } from 'next/navigation';


function PostActions({ SnippetData }: { SnippetData: SnippetDataInterface }) {
  const { toast } = useToast();
  const router = useRouter()
  const pathname = usePathname();

  const db = getFirestore(app);
  const { changeAllSnippets } = useAuth();
  // console.log(SnippetData)

  const deletedata = async () => {
    // console.log(SnippetData.id);
    changeAllSnippets(SnippetData.SnipId, SnippetData.id);
    await deleteDoc(doc(db, "Snippets", SnippetData.id));
    if(pathname != "/Profile"){
      router.push("/Profile")
    }
    toast({
      description: "Snippet deleted!",
    });

  };

  return (
    <div className="flex flex-row  justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        {SnippetData?.flames > 0 || SnippetData?.private ? (
          <></>
        ) : (
          <>
            <div className="flex flex-col jutsify-center items-center gap-1">
              <div className="rounded-full   bg-slate-200  cursor-pointer  flex flex-col p-2">
                <Flame className="h-5 w-5" />
              </div>
              <div className="text-sm text-black">{SnippetData?.flames}</div>
            </div>
          </>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <div className="rounded-full px-3 max-[430px]:px-2 py-2  max-[430px]:py-2  h-fit w-fit   bg-slate-200 items-center cursor-pointer  flex flex-row ">
              <Share className=" h-4 w-4 max-[470px]:h-3 max-[470x]:w-3" />
              <div className="text-sm max-[430px]:text-xs ml-1">Share</div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this Snip.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue={`${process.env.NEXT_PUBLIC_SERVER}/Share/${SnippetData.SnipId}`}
                  readOnly
                />
              </div>

              <Copy
                className="h-4 w-4 cursor-pointer "
                onClick={() =>
                  navigator.clipboard
                    .writeText(
                      `${process.env.NEXT_PUBLIC_SERVER}/Share/${SnippetData.SnipId}`
                    )
                    .then((resp) => {
                      toast({
                        description: "Link Copied",
                      });
                    })
                }
              />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <AlertDialog  >
        <AlertDialogTrigger className="" >
            <div
              className="rounded-full   h-fit w-fit  items-center cursor-pointer  flex flex-row p-1"
              
            >
              <Trash className="m-1" size={18} />
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              Snippet and remove the data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deletedata}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default PostActions;
