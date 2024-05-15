"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";

interface UserData {
  _id: string;
  username: string;
  email: string;
  mobile: string;
  department: string;
}

function ProfileCard() {
  const router = useRouter();
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const userData: UserData = res.data.data;
        setData(userData);
        setLoading(false);
      } catch (error) {
        const errorMessage = (error as Error).message;
        console.log(errorMessage);
        toast.error(errorMessage);
      }
    };

    getUserData();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <div className="flex items-center justify-center">
          <button
            disabled
            type="button"
            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-WHITE animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...User Details
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-6 right-6">
            <MdEdit
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              size={26}
            />
          </div>
          <div className="flex gap-y-6 flex-wrap bg-white rounded-xl shadow-md p-8">
            <div className="flex w-full gap-x-4 items-center">
              <div className="shrink-0 w-20">
                <img src="https://api.dicebear.com/8.x/fun-emoji/svg" />
              </div>
              <div className="relative">
                <p className="font-bold text-xl text-black w-full mb-1">
                  {data?.username}
                </p>
                <div className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                  <button className="px-2 rounded-md font-bold text-black bg-white">
                    Registred User
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200/70 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
              <div className="relative w-full">
                <p className="text-sm text-gray-700">User Name</p>
                <p className="font-semibold text-black">{data?.username}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Email Id</p>
                <p className="font-semibold text-black">{data?.email}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Phone Number</p>
                <p className="font-semibold text-black">{data?.mobile}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Department</p>
                <p className="font-semibold text-black">{data?.department}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Password</p>
                <p className="font-semibold text-black">********</p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={logout}
                className="bg-gray-200/70 rounded-xl px-6 py-3 inline-block text-black hover:bg-gray-100 duration-150"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
