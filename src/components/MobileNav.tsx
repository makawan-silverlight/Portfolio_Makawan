"use client";
import { LinksType } from "@/interfaces";
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileNavProp {
    links : LinksType[]
}
function MobileNav({ links }:MobileNavProp) {
    const pathName = usePathname();
    return (
        <div className="md:hidden fixed bottom-8 left-0 right-0 w-full mx-auto z-50">
            <nav className="w-[90%] max-w-96 mx-auto flex justify-around items-center bg-white rounded-2xl">
                {links.map((link, index) => {
                    return (
                        <Link className="w-full h-20" href={link.path} key={index}>
                            <div className={`${link.path === pathName ? "text-[#0D6EFD]" : "text-gray-500"} text-3xl w-full h-full flex flex-col justify-center items-center gap-1 duration-1000`}>
                                {link.icon}
                                <h4 className="text-sm">{link.name}</h4>
                                {link.path === pathName && <div className="bg-[#0D6EFD] w-16 h-1 rounded-t-md absolute bottom-0"></div>}
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default MobileNav