// @ts-nocheck
"use client";
import { useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userImgLink, setUserImgLink] = useState(null);
  if (user !== null) {
    router.push("/Dashbord");
  }

  const googleAuth = new GoogleAuthProvider();

  const googleSignIn = async () => {
    console.log("button is clicked");
    const result = await signInWithPopup(auth, googleAuth);
    console.log(result.user.photoURL);
    console.log(result.user.displayName);
    setUser(result.user.displayName);
    setUserImgLink(result.user.photoURL);
  };

  return (
    <div className="relative h-[100vh]">
      
      <Image
        src="https://img.freepik.com/premium-vector/career-development-icons_24911-69064.jpg"
        alt=""
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        // priority
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-7xl text-bold text-white mt-36 z-10">
          SwapnaYaan
        </div>
        <div className="mt-4 text-gray-400 z-10">
          We SwapnaYaan aims to Nourish Young minds and Guide individual to it&apos;s
          peek pontentails...
        </div>
        <button
          onClick={googleSignIn}
          className="flex bg-white border-[2px] z-10 mt-10 border-yellow-500 px-6 py-2 rounded-lg shadow-xl hover:bg-yellow-300"
        >
          
          <Image
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            alt="Google Icon"
            width={24} 
            height={24} 
            className="h-6 mx-3" 
          />
          Login with Google
        </button>
        {user}
      </div>
    </div>
  );
}
