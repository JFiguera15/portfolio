"use client";

import { useState } from 'react'



export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    console.log('Sending');
    let data = {
      name,
      email,
      message
    };
    fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };
  
  

  return (
    <main className="flex flex-col md:flex-row mt-12 ">
      <div className="mx-auto flex flex-col space-y-4 md:space-y-0">
        <form className="flex flex-col min-w-screen" name='form'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} className='text-black' />

          <label htmlFor='email'>Email</label>
          <input type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} className='text-black' />

          <label htmlFor='message'>Message</label>
          <textarea name='message' onChange={(e) => { setMessage(e.target.value) }} className='text-black' />

          <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </form >
      </div>
    </main>
  );
}