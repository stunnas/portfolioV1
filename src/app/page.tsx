"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationAside from "@/components/sections/navigationAside";
import ProfileAside from "@/components/sections/profileAside";
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { PenToolIcon, SmartphoneIcon, CameraIcon, CodeIcon, ReactIcon, JavascriptIcon, TypescriptIcon, TailwindIcon, CSSIcon, HTMLIcon, SwiftIcon, JavaIcon, CSharpIcon, PythonIcon, SQLIcon, ControllerIcon } from "@/components/vectors/svg";
import MobileDropdown from '@/components/sections/mobileDropdown';
import { Checkbox } from '@/components/ui/checkbox';


export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    const [autoplay, setAutoplay] = useState(true);
    
    const handleAutoplayChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setAutoplay(event.target.checked);
    };

    const services = [
        {
            icon: <SmartphoneIcon className="h-6 w-6 text-green-600" />,
            title: 'App Development',
            description: "Utilizing the latest tools and frameworks, we specialize in crafting dynamic, responsive applications that deliver a seamless user experience across all platforms. Our approach is to merge design with functionality, ensuring each app meets the high standards of today's mobile-savvy users."
        },
        {
            icon: <CodeIcon className="h-6 w-6 text-red-600" />,
            title: 'Web Development',
            description: "From small informational sites to complex web applications, we employ cutting-edge coding practices and technologies to create web presences that are not only visually appealing but also highly functional. We focus on user-friendly designs and interactive features to keep your audience engaged."
        },
        {
            icon: <PenToolIcon className="h-6 w-6 text-blue-600" />,
            title: 'UI/UX Design',
            description: "We focus on understanding your users' needs to create designs that are both aesthetically pleasing and practically functional. Whether you're revamping an existing interface or creating a new one from scratch, our designs ensure accessibility, engagement, and ease of use."
        },
        
        {
            icon: <ControllerIcon className="h-6 w-6 text-purple-600" />,
            title: 'Game Development',
            description: "I specialize in creating immersive, engaging games that captivate players with stunning visuals and compelling gameplay. Our team utilizes state-of-the-art technology and innovative design principles to bring game concepts to life."
        },
    ];

    const languages = [
        { icon: <JavascriptIcon className="size-16 lg:size-24"/>, name: 'Javascript' },
        { icon: <TypescriptIcon className="size-16 lg:size-24"/>, name: 'Typescript' },
        { icon: <TailwindIcon className="size-16 lg:size-24"/>, name: 'Tailwind CSS' },
        { icon: <ReactIcon className="size-16 lg:size-24"/>, name: 'React' },
        { icon: <CSSIcon className="size-16 lg:size-24"/>, name: 'CSS' },
        { icon: <HTMLIcon className="size-16 lg:size-24"/>, name: 'HTML' },
        { icon: <SwiftIcon className="size-16 lg:size-24"/>, name: 'Swift' },
        { icon: <CSharpIcon className="size-16 lg:size-24"/>, name: 'C#' },
        { icon: <JavaIcon className="size-16 lg:size-24"/>, name: 'Java' },
        { icon: <PythonIcon className="size-16 lg:size-24"/>, name: 'Python' },
        { icon: <SQLIcon className="size-16 lg:size-24"/>, name: 'SQL' },
    ];

    return (
        <div className={`flex items-center justify-center relative h-screen bg-swirl`}>
            <MobileDropdown/>
            <ProfileAside/>
            <main data-aos="flip-up" className="w-[90%] lg:w-[60%] h-[90%] flex flex-col items-center justify-start p-8 bg-white border-2 border-black rounded-xl overflow-y-auto">
                <div className="w-full flex flex-row justify-start items-center space-x-4">
                    <h1 className="text-3xl lg:text-4xl font-bold">About Me</h1>
                    <span className="w-[40%] h-1 bg-blue-500"/>
                </div>
                <div>
                    <p className="mt-4 text-gray-600">
                        I&apos;m a web / game devleoper based in Raleigh, NC, working in consulting. I
                        enjoy turning complex problems into simple, beautiful and intuitive designs.
                    </p>
                    <p className="mt-2 text-gray-600">
                        My aim is to bring across your message and identity in the most creative way and always try to craft a truly interactive, accessible environment.
                    </p>
                </div>
                {/* Services Cards */}
                <div className="flex flex-col items-start justify-center">
                    <h2 className="flex items-start justify-start mt-8 mb-4 text-xl font-semibold ">What I Do!</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <Card key={index} className="bg-white p-4 border-black">
                                <div className="flex flex-row items-center justify-center lg:justify-start space-x-2">
                                    {service.icon}
                                    <h3 className="mt-2 mb-2 text-sm text-center lg:text-left lg:text-lg font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-sm text-center lg:text-left text-gray-600">
                                    {service.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
                {/* Languages Carousel */}
                <div className="w-[85%] flex flex-col justify-center items-center m-8 py-8 border border-black rounded-xl">
                    <h2 className="mb-4">Languages / Frameworks</h2>
                    <Carousel className="w-[100%] flex justify-center items-center" autoplay={autoplay}>
                        <CarouselContent className="w-full cursor-grab">
                            {languages.map((language, index) => (
                                <CarouselItem key={index} className="flex flex-col justify-center items-center">
                                    {language.icon}
                                    <h3 className="text-sm text-center lg:text-left lg:text-base">{language.name}</h3>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="w-[85%] flex flex-row justify-center lg:justify-end items-center space-x-1 -mt-6">
                    <Checkbox checked={autoplay} onCheckedChange={(checked) => {
                        if (checked === "indeterminate") {
                            setAutoplay(false);
                        } else {
                            setAutoplay(checked);
                        }
                    }} />
                    <p>Automatic Movement?</p>
                </div>
                <div className="flex flex-row justify-center space-x-2 mt-4 font-bold">
                        <h2 className="text-xs md:text-sm animate-spin ">*</h2>
                        <h3 className="text-black text-center text-xs md:text-sm">Made with React, Typescript, Tailwind CSS, Next JS</h3>
                        <h2 className="text-xs md:text-sm animate-spin">*</h2>
                </div>
            </main>
            <NavigationAside/>
        </div>
        
    )
}
