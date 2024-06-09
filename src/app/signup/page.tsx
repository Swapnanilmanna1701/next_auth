'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from "next/link";


export default function SignupPage() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    

  });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push('/login')
    } catch (error: any) {
      console.log("signup failed!!")
      toast.error(error.message)
    }

  };
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    }  else {
      setButtonDisabled(true);
    }
  })

  return (
    <div className="flex flex-col bg-black items-center justify-center min-h-screen py-2 text-white">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">Email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">Password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login" className='text-white'>Visit login page</Link>
        </div>
  )
}

       