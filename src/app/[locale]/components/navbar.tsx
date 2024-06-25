'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const pathname = usePathname();
    const {t} = useTranslation();

    return (
        <ul className="flex flex-row  mt-8 space-x-4 font-bold text-xl md:text-3xl justify-center md:justify-end md:pr-10 [&_li:hover]:text-primary [&_li:hover]:-translate-y-2 text-secondary animate-fadeDown">
            <li className="my-auto transition ease-in-out "><Link className={`link ${pathname === '/' ? 'text-primary' : ''}`} href="/">{t("aboutMe")}</Link></li>
            <li className="my-auto transition ease-in-out"><Link className={`link ${pathname === '/projects' ? 'text-primary' : ''}`} href="/projects">{t("projects")}</Link></li>
            <li className="my-auto transition ease-in-out"><Link className={`link ${pathname === '/skills' ? 'text-primary' : ''}`} href="/skills">{t("skills")}</Link></li>
            <li className="my-auto transition ease-in-out"><Link className={`link ${pathname === '/contact' ? 'text-primary' : ''}`} href="/contact">{t("contactMe")}</Link></li>
        </ul>
    );
}