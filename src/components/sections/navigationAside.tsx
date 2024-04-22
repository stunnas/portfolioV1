"use client"
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";
import { FileIcon, HammerIcon, MenuIcon, PersonStandingIcon } from "@/components/vectors/svg";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function NavigationAside() {
    const pathname = usePathname();

    const getButtonVariant = (path: string) => {
        return pathname === path ? 'bg-blue-500 text-white' : 'bg-transparent';
    };
    
    return (
        <aside data-aos="flip-right" className="hidden flex-row justify-center items-center lg:p-8 w-0 lg:w-[15%] lg:relative lg:flex lg:flex-col ">
            <nav className={`w-full min-w-max max-h-min flex flex-col relative items-center justify-center space-y-4 rounded-xl p-4 bg-white border-2 border-black transition `}>
                <Link href="/" className="w-full">
                    <Button className={`w-full h-1/3 flex flex-col justify-center items-center p-4 text-black hover:bg-sky-300 hover:text-white ${getButtonVariant("/")}`} icon={<PersonStandingIcon/>}>About</Button>
                </Link>
                <Link href="/resume" className="w-full">
                    <Button className={`w-full h-1/3 flex flex-col justify-center items-center p-4 text-black hover:bg-sky-300 hover:text-white ${getButtonVariant("/resume")}`}  icon={<FileIcon/>}>Resume</Button>
                </Link>
                <Link href="/projects" className="w-full" >
                    <Button className={`w-full h-1/3 flex flex-col justify-center items-center p-4 text-black hover:bg-sky-300 hover:text-white ${getButtonVariant("/projects")}`} icon={<HammerIcon/>}>Projects</Button>
                </Link>                
            </nav>
        </aside>
        
    )
}