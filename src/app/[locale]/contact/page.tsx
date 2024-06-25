"use client";

import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import i18nConfig from '@@/i18nConfig';
import initTranslations from '@/app/i18n';
const i18nNamespaces = ["contactMe", "common"]
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  return (
    <main className="flex flex-col md:flex-row mt-12">
      <Toaster />
      <div className="mx-auto flex flex-col xl:scale-110 xl:translate-y-8">
        <form className="flex flex-col space-y-3 md:space-y-4 w-80 md:w-96 text-secondary font-semibold animate-fadeUp" name='form' onSubmit={(e) => { handleSubmit(e) }}>
          <label htmlFor='name' className='text-2xl md:text-3xl'>{t("contactMe:name")}</label>
          <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} className='text-black rounded-md h-9 px-2 border border-secondary' required />

          <label htmlFor='email' className='text-2xl md:text-3xl'>{t("contactMe:email")}</label>
          <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='text-black rounded-md h-9 px-2 border border-secondary' required />

          <label htmlFor='message' className='text-2xl md:text-3xl'>{t("contactMe:message")}</label>
          <textarea name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} className='text-black rounded-md h-36 px-2 border border-secondary' required />

          <input type='submit' className='mt-2 hover:bg-secondary hover:text-slate-400 text-black bg-slate-400 w-28 border border-secondary' value={t("submit")}/>
        </form >
      </div>
    </main>
  );
}