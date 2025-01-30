
import Image from "next/image";
import Link from "next/link"
import { IoHome } from "react-icons/io5";
import type { IconType } from "react-icons";
import { MdWork } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { LinksType } from "@/interfaces";




const links:LinksType[] = [
    {
        name: "home",
        path: "/",
        icon: <IoHome />
    },
    {
        name: "resume",
        path: "/resume",
        icon: <MdWork />
    },
    {
        name: "work",
        path: "/work",
        icon: <FaComputer />
    },
    {
        name: "contact",
        path: "/contact",
        icon: <RiContactsBook3Fill />
    }
]

function Header() {
    return (
        <>
            <header className="relative flex flex-col items-center justify-between py-8 xl:py-12">
                <Image
                    src={"/lightGrid.svg"}
                    alt="grid"
                    width={1572}
                    height={795}
                    className="absolute top-0 -z-10"
                />
                <div className="container mx-auto flex justify-center md:justify-between items-center">

                    <Link href={"/"}>
                        <h1 className=" relative flex items-center justify-center text-3xl font-semibold">MAKAWAN <span className=" absolute bottom-0 -right-4 text-6xl text-header">.</span></h1>
                    </Link>

                    <Nav links={links} />
                </div>
            </header>
            <MobileNav links={links} />
        </>


    )
}

export default Header