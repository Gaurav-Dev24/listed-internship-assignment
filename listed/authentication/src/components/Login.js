import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";



export default function Login() {
   
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full  bg-black ">
      <div className="hidden sm:block text-white text-center mx-0 my-auto text-[5rem]">
        Board.
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto p-8">
          {/* Heading of the sign in */}
          <h2 className="text-4xl font-bold text-left py-3">Sign In</h2>
          <p className="text-[10px] font-bold">Sign in your account</p>

          {/* Google and Apple icons */}
          <div className="flex justify-between text-[10px] text-slate-400 py-8">
            <p className="bg-white rounded-lg  px-6 py-2 relative flex items-center">
              <FcGoogle className="mr-2" /> Sign in with Google
            </p>
            <p className="bg-white rounded-lg  px-6 py-2 relative flex items-center">
              <FaApple className="mr-2" /> Sign in with Apple
            </p>
          </div>

          {/* Label and Inputs */}
          <div className="flex flex-col py-2 px-5 bg-white text-sm">
            <label>Email address</label>
            <input
              className="border rounded-[20px] p-2 bg-gray-100"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 px-5 bg-white text-sm">
            <label>Password</label>
            <input
              className="border rounded-[20px] p-2 bg-gray-100"
              type="password"
            />
          </div>
        <div className="flex flex-col py-2 px-5 bg-white text-sm text-indigo-600 hover:text-black">
            <p>Forgot Password?</p>
        </div>
        

          {/* Sign In/ Sign Out Button */}
          <LoginButton />
          <LogOutButton />
        
          {/* Register div */}
          <div className="flex justify-between ">
            <p className="flex items-center  p-10 text-sm">
              Don't have account?<span className="text-indigo-600 hover:text-black">Register Here</span> 
            </p>
          </div>
        </form>
      </div>
      
    </div>
    </>
  );
}
