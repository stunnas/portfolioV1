"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";
import { FileIcon, HammerIcon, PersonStandingIcon } from "@/components/vectors/svg";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavigationAside() {

    const pathname = usePathname();

    const getButtonVariant = (path: string) => {
        return pathname === path ? 'destructive' : 'ghost';
    };
    
    return (
        <aside data-aos="flip-right" className="hidden lg:w-[15%] lg:flex flex-col justify-center items-center p-8">
            <nav className="w-full lg:w-[90%] min-w-max max-h-min flex flex-col items-center justify-center space-y-4 rounded-xl p-4 bg-white border-2 border-black">
                <Link href="/" className="w-full">
                    <Button className="w-full h-[33%] flex flex-col justify-center items-center p-4" variant={getButtonVariant("/")} icon={<PersonStandingIcon/>}>About</Button>
                </Link>
                <Link href="/resume" className="w-full">
                    <Button className="w-full h-[33%] flex flex-col justify-center items-center p-4" variant={getButtonVariant("/resume")} icon={<FileIcon/>}>Resume</Button>
                </Link>
                <Link href="/projects" className="w-full" >
                    <Button className="w-full h-[33%] flex flex-col justify-center items-center p-4" variant={getButtonVariant("/projects")} icon={<HammerIcon/>}>Projects</Button>
                </Link>
                
            </nav>
        </aside>
    )
}