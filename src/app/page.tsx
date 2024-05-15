import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "linear-gradient(to top, #a18cd1, #fbc2eb)",
      }}
    >
      <nav className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-black text-lg font-semibold">NextAuth</h1>
          <div>
            <button className="text-black font-semibold mr-4">
              <Link href="/home">Home</Link>
            </button>
            <button className="text-black font-semibold mr-4">
              <Link href="/signup">Sign Up</Link>
            </button>
            <button className="text-black font-semibold">
              <Link href="/login">Sign In</Link>
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage</h1>
          <p className="text-lg">NextAuth Home Page.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
