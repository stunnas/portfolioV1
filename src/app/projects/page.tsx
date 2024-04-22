'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationAside from "@/components/sections/navigationAside";
import ProfileAside from "@/components/sections/profileAside";
import MobileDropdown from '@/components/sections/mobileDropdown';
import { Button } from '@/components/ui/button';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";


type Category = 'brands' | 'landing pages' | 'tools' | 'all';
type Project = {
    title: string;
    image: string;
    category: Category;
    website?: string;
};

export default function Projects() {    
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    const [isAlertOpen, setAlertOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<Category>('all');
    
    
    const handleCardClick = (project: Project) => {
        if (project.website) {
            window.open(project.website, '_blank');
        } else {
            setSelectedProject(project);
            setAlertOpen(true);
        }
    };

    const projects: Project[] = [
        {
            title: 'Compleo',
            image: '/compleo.png',
            category: 'landing pages',
            website: 'https://compleo.vercel.app/',
        },
        {
            title: 'Stunna Persona',
            image: '/stunnapersona.png',
            category: 'brands',
        },
        {
            title: 'Audio Glow',
            image: '/musicvisualizer.png',
            category: 'tools',
        },
        {
            title: 'Word Assistant',
            image: '/wordassistant.png',
            category: 'tools',
        },
        {
            title: 'Typing Speed Test',
            image: '/typingtest.png',
            category: 'tools',
        },
        {
            title: 'Image Editor',
            image: '/imageeditor.png',
            category: 'tools',
        },
        
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="flex items-center justify-center relative h-screen bg-swirl">
            <MobileDropdown/>
            <ProfileAside/>
            <main data-aos="flip-up" className="w-[90%] lg:w-[60%] h-[90%] flex flex-col justify-start items-center p-8 bg-white border-2 border-black rounded-xl overflow-y-auto">
                <div className="w-full flex flex-row justify-start items-center space-x-4">
                        <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>
                        <span className="w-[40%] h-1 bg-blue-500"/>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 space-x-2 my-4">
                    <Button onClick={() => setFilter('all')} className={`px-4 py-2 border border-black rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-black'} hover:bg-sky-300 hover:text-white`}>All</Button>
                    <Button onClick={() => setFilter('brands')} className={`px-4 py-2 border border-black rounded-lg ${filter === 'brands' ? 'bg-blue-500 text-white' : 'bg-white text-black'} hover:bg-sky-300 hover:text-white`}>Brands</Button>
                    <Button onClick={() => setFilter('landing pages')} className={`px-4 py-2 border border-black rounded-lg ${filter === 'landing pages' ? 'bg-blue-500 text-white' : 'bg-white text-black'} hover:bg-sky-300 hover:text-white`}>Landing Pages</Button>
                    <Button onClick={() => setFilter('tools')} className={`px-4 py-2 border border-black rounded-lg ${filter === 'tools' ? 'bg-blue-500 text-white' : 'bg-white text-black'} hover:bg-sky-300 hover:text-white`}>Tools</Button>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                    {filteredProjects.map((project, index) => (
                        <div key={index} onClick={() => handleCardClick(project)}>
                            <CardContainer className="max-w-full group">
                                <CardBody className="bg-gray-50 relative group/card border-black w-full sm:w-[30rem] h-auto rounded-xl p-6 border hover:ring-2 hover:cursor-pointer">
                                    <CardItem translateZ="100" className="text-xl font-bold">
                                        {project.title}
                                    </CardItem>
                                    <CardItem translateZ="125" className="w-full flex justify-center my-4">
                                        <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-xl size-48" priority={true}/>
                                    </CardItem>
                                    <div className="relative inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <span className="text-lg font-bold text-gray-700">Go to website</span>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center space-x-2 mt-4 font-bold">
                        <h2 className="text-xs md:text-sm animate-spin ">*</h2>
                        <h3 className="text-black text-center text-xs md:text-sm">Made with React, Typescript, Tailwind CSS, Next JS</h3>
                        <h2 className="text-xs md:text-sm animate-spin">*</h2>
                </div>
                <AlertDialog open={isAlertOpen} onOpenChange={setAlertOpen}>
                    <AlertDialogTrigger asChild />
                    <AlertDialogContent>
                        <AlertDialogHeader>Website Not Available</AlertDialogHeader>
                        <AlertDialogDescription>
                            <strong>{selectedProject?.title}</strong> coming soon.
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setAlertOpen(false)}>Close</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                
            </main>
            <NavigationAside/>
        </div>
    )
}