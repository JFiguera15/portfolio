'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

export default function NavLinks() {
    const pathname = usePathname().split("/");
    const { t } = useTranslation();

    return (
        <>
            <li className="drop-shadow-xl my-auto md:transition md:ease-in-out md:hover:-translate-y-2"><Link className={`link ${usePathname() === '/' || usePathname() === '/es' ? 'text-primary' : ''}`} href="/">{t("aboutMe")}</Link></li>
            <li className="drop-shadow-xl my-auto md:transition md:ease-in-out md:hover:-translate-y-2"><Link className={`link ${pathname.some((e) => e === 'projects')  ? 'text-primary' : ''}`} href="/projects">{t("projects")}</Link></li>
            <li className="drop-shadow-xl my-auto md:transition md:ease-in-out md:hover:-translate-y-2"><Link className={`link ${pathname.some((e) => e === 'skills') ? 'text-primary' : ''}`} href="/skills">{t("skills")}</Link></li>
            <li className="drop-shadow-xl my-auto md:transition md:ease-in-out md:hover:-translate-y-2"><Link className={`link ${pathname.some((e) => e === 'contact') ? 'text-primary' : ''}`} href="/contact">{t("contactMe")}</Link></li>
        </>
    )
}