"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";

export default function ProfilePage() {
  const router =useRouter()

  const logout= async ()=>{
  
      try{
        await axios.get('api/users/logout')
        toast.success("Lopgout Successfully")
        router.push('/login')



      }catch(error){

      }
    }

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <h2>Profile Page</h2>
      <hr />

      <button
      onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"></button>
    </div>
  );
}

