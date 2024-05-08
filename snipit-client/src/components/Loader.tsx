import Image from "next/image";
import React from "react";

function Loader() {
  return (
    
 <div className="items-center h-screen w-screen  my-auto flex flex-col justify-center ">
      <Image src={"/loader2Gif.gif"} priority={true} width={190} height={190} alt="loading..."/>
      <p>Please Wait ..</p>
    </div>
    
   
  );
}

export default Loader;
