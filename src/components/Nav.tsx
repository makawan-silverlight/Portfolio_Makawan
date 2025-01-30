"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinksType } from '@/interfaces';

interface NavProp {
    links : LinksType[]
}

function Nav({links}: NavProp) {
    const pathName = usePathname();
    return (
        <nav className=' hidden md:flex gap-8 items-center'>
            {links.map((link, index) => {
                return (
                    <Link className={`
                        ${link.path === pathName && "text-header border-b-2 border-header"}
                        capitalize font-medium hover:text-header transition-all`} href={link.path} key={index}>{link.name}</Link>
                )
            })}
        </nav>
    )
}

export default Nav