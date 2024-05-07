import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-row justify-center w-full h-full items-center">
      <div className="mx-auto mt-[10vh]">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}


