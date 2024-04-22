import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CalendarIcon, GithubIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailboxIcon, PhoneIcon } from "../vectors/svg";

export default function MobileDropdown() {
    const pathname = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const getButtonVariant = (path: string) => {
        return pathname === path ? 'bg-blue-500 text-white hover:text-black' : 'bg-transparent';
    };
    
    const dropdownClasses = `absolute top-full left-0 mt-2 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1/2 pointer-events-none'}`;
    return (
        <div className="lg:hidden min-w-max flex flex-row items-center justify-center absolute top-0 p-4 my-2 space-x-4 z-50 bg-white/70 border border-black rounded shadow">
            <Button onClick={toggleDropdown} className="flex justify-center space-x-0">
                <p>Pages</p>
                <ChevronDown className={`size-4 transition ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}/>
            </Button>
            <div className={dropdownClasses} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1">
                    <Link href="/" className={`block px-4 py-2 text-sm rounded ${getButtonVariant('/')} text-gray-700 hover:bg-sky-300 `} role="menuitem">About</Link>
                    <Link href="/resume" className={`block px-4 py-2 text-sm rounded ${getButtonVariant('/resume')} text-gray-700 hover:bg-sky-300`} role="menuitem">Resume</Link>
                    <Link href="/projects" className={`block px-4 py-2 text-sm rounded ${getButtonVariant('/projects')} text-gray-700 hover:bg-sky-300`} role="menuitem">Projects</Link>
                </div>
            </div>
            <Button onClick={() => setProfileOpen(true)}>Profile</Button>
            <AlertDialog open={isProfileOpen} onOpenChange={setProfileOpen}>
                <AlertDialogTrigger asChild />
                <AlertDialogContent className="flex flex-col items-center justify-center space-y-2">
                    <AlertDialogHeader>My Profile</AlertDialogHeader>
                    <div className="flex flex-col items-center justify-center">
                        <Avatar className="size-48 flex jusify-center items-center border-2 border-black">
                                <AvatarImage alt="Chase Albritton" src="/headshot.jpg" />
                                <AvatarFallback>CA</AvatarFallback>
                        </Avatar>
                        <h2 className="mt-4 text-lg font-semibold">Chase Albritton</h2>
                        <p className="text-sm text-gray-600">Web Developer</p>
                        <div className="flex w-full flex-row items-center justify-center mt-2 space-x-8">
                            <Link href="https://www.linkedin.com/in/calbritton/" target="_blank" className="border-black border rounded-xl p-2 text-blue-500 hover:bg-blue-600/20">
                                <LinkedinIcon className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.instagram.com/albittron/" target="_blank" className="border-black border rounded-xl p-2 text-pink-500 hover:bg-pink-600/20">
                                <InstagramIcon className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com/stunnas" target="_blank" className="border-black border rounded-xl p-2 text-black hover:bg-black/20">
                                <GithubIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-col items-center mt-6 space-y-2">
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="h-5 w-5 text-gray-600" />
                            <span className="text-sm">+1 703-298-5011</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MailboxIcon className="h-5 w-5 text-gray-600" />
                            <span className="text-sm">chaseaalbritton@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <LocateIcon className="h-5 w-5 text-gray-600" />
                            <span className="text-sm">Raleigh, NC</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CalendarIcon className="h-5 w-5 text-gray-600" />
                            <span className="text-sm">January 22, 2002</span>
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setProfileOpen(false)}>Close</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
        
    )
}