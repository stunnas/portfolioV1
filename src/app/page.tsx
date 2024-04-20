"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationAside from "@/components/sections/navigationAside";
import ProfileAside from "@/components/sections/profileAside";
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { PenToolIcon, SmartphoneIcon, CameraIcon, CodeIcon, ReactIcon, JavascriptIcon, TypescriptIcon, TailwindIcon, CSSIcon, HTMLIcon, SwiftIcon, JavaIcon, CSharpIcon, PythonIcon, SQLIcon } from "@/components/vectors/svg";


export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    const services = [
        {
            icon: <PenToolIcon className="h-6 w-6 text-blue-600" />,
            title: 'UI/UX Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut voluptat.'
        },
        {
            icon: <SmartphoneIcon className="h-6 w-6 text-green-600" />,
            title: 'App Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut voluptat.'
        },
        {
            icon: <CameraIcon className="h-6 w-6 text-purple-600" />,
            title: 'Photography',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut voluptat.'
        },
        {
            icon: <CodeIcon className="h-6 w-6 text-red-600" />,
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut voluptat.'
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
                        My aim is to bring across your message and identity in the most creative way and always try to craft a truly interactive, accessible enviornment.
                    </p>
                </div>
                {/* Services Cards */}
                <div className="flex flex-col items-start justify-center">
                    <h2 className="flex items-start justify-start mt-8 mb-4 text-xl font-semibold ">What I Do!</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <Card key={index} className="bg-white p-4">
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
                <div className="w-[85%] flex flex-col justify-center items-center m-8 py-8 border rounded-xl">
                    <h2 className="mb-4">Languages / Frameworks</h2>
                    <Carousel className="w-[100%] flex justify-center items-center">
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
                {/* <div className="absolute bottom-0 p-4 text-black text-center">
                    <div className="flex flex-row justify-center space-x-2">
                        <h2 className="text-xs md:text-sm animate-spin ">*</h2>
                        <h3 className="text-xs md:text-sm">Made with React, Typescript, Tailwind CSS, Next JS</h3>
                        <h2 className="text-xs md:text-sm animate-spin">*</h2>
                    </div>
                </div> */}
            </main>
            <NavigationAside/>
        </div>
        
    )
}
