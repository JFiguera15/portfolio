"use client";

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function validateForm(name, email, message) {
    // Validate name (non-empty)
    if (!name.trim()) {
      return false;
    }

    // Validate email (must be a valid email format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      return false;
    }

    // Validate message (non-empty)
    if (!message.trim()) {
      return false;
    }

    // All fields are valid
    return true;
  }

  const handleSubmit = (e) => {
    console.log(validateForm(name, email, message))
    e.preventDefault();
    if (validateForm(name, email, message)) {
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
        loading: "Sending...",
        success: "Sent succesfully!",
        error: "Error"
      })
      setName("");
      setEmail("");
      setMessage("");
    }
  };



  return (
    <main className="flex flex-col md:flex-row mt-12 ">
      <Toaster />
      <div className="mx-auto flex flex-col">
        <form className="flex flex-col space-y-3 md:space-y-4 w-96 " name='form' onSubmit={(e) => { handleSubmit(e) }}>
          <label htmlFor='name' className='text-2xl md:text-3xl'>Name:</label>
          <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} className='text-black rounded-md h-9 px-2' required />

          <label htmlFor='email' className='text-2xl md:text-3xl'>Email:</label>
          <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='text-black rounded-md h-9 px-2' required />

          <label htmlFor='message' className='text-2xl md:text-3xl'>Message:</label>
          <textarea name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} className='text-black rounded-md h-36 px-2' required />

          <input type='submit' className='mt-2 bg-secondary text-black hover:bg-slate-400 w-28 snap-center' />
        </form >
      </div>
    </main>
  );
}