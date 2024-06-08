"use client";

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    let data = {
      name,
      email,
      message
    };
    const promise = fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    toast.promise(promise, {
      loading:"Sending...",
      success:"Sent succesfully!",
      error:"Error"
    })
  };



  return (
    <main className="flex flex-col md:flex-row mt-12 ">
      <Toaster />
      <div className="mx-auto flex flex-col">
        <form className="flex flex-col space-y-3 md:space-y-4 w-96 " name='form'>
          <label htmlFor='name' className='text-2xl md:text-3xl'>Name:</label>
          <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} className='text-black rounded-md h-9 px-2' required />

          <label htmlFor='email' className='text-2xl md:text-3xl'>Email:</label>
          <input type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} className='text-black rounded-md h-9 px-2' required />

          <label htmlFor='message' className='text-2xl md:text-3xl'>Message:</label>
          <textarea name='message' onChange={(e) => { setMessage(e.target.value) }} className='text-black rounded-md h-36 px-2' required />

          <input type='submit' onClick={(e) => { handleSubmit(e) }} className='mt-2 bg-secondary text-black hover:bg-slate-400 w-28 snap-center' />
        </form >
      </div>
    </main>
  );
}