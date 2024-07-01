'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@@/i18nConfig';
import { useState } from 'react';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [visible, setVisible] = useState(false)

  const handleChange = e => {
    const newLocale = e.target.text.toLowerCase();
    console.log(e)

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <>
      <button id="dropdownDefaultButton"
        onClick={() => setVisible(!visible)}
        className="text-secondary text-2xl md:text-3xl  font-bold rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button">{currentLocale.toUpperCase()}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div id="dropdown" className={`z-10 bg-secondary divide-y divide-gray-100 rounded-lg shadow w-44 ${visible ? "scale-100" : "scale-0"} transition-all ease-out origin-top-left`}>
        <ul className="py-2 text-sm text-gray-300" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" onClick={handleChange} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EN</a>
          </li>
          <li>
            <a href="#" onClick={handleChange} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ES</a>
          </li>
        </ul>
      </div>

    </>

  );
}