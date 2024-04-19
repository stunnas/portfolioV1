'use client';
import 'aos/dist/aos.css';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon, PhoneIcon, MailboxIcon, LocateIcon, CalendarIcon, InstagramIcon } from "@/components/vectors/svg";


export default function ProfileAside() {
  
  return (
    <aside data-aos="flip-left" className="hidden lg:w-1/4 lg:flex justify-center items-center">
      <div className="flex flex-col items-center justify-center relative rounded-xl p-8 pt-24 bg-white border-2 border-black">
        <Avatar className="size-48 absolute bottom-full translate-y-24 flex jusify-center items-center border-2 border-black">
          <AvatarImage alt="Chase Albritton" src="/headshot.jpg" />
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold">Chase Albritton</h2>
        <p className="text-sm text-gray-600">Web Developer</p>
        <div className="flex w-full flex-row items-center justify-center mt-2 space-x-8">
          <div className="border-black border rounded-xl p-2 hover:bg-blue-600/20">
            <a className="w-full h-full flex items-center text-blue-600" href="https://www.linkedin.com/in/calbritton/" target="_blank">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="border-black border rounded-xl p-2 hover:bg-pink-400/20">
            <a className="flex items-center space-x-2 text-pink-400" href="https://www.instagram.com/albittron/" target="_blank">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="border-black border rounded-xl p-2 hover:bg-black/20">
            <a className="flex items-center space-x-2 text-black" href="https://github.com/stunnas" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
          
        </div>
        <div className="mt-6 w-full space-y-2">
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
        <Button className="mt-6 w-full" variant="outline">
          Download CV
        </Button>
      </div>
    </aside>
  );
}