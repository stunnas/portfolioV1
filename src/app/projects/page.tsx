'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationAside from "@/components/sections/navigationAside";
import ProfileAside from "@/components/sections/profileAside";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";

type Project = {
    title: string;
    image: string;
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
            website: 'https://compleo.vercel.app/',
        },
        {
            title: 'Stunna Persona',
            image: '/stunnapersona.png',
        },
        {
            title: 'Word Assistant',
            image: '/wordassistant.png',
        },
        {
            title: 'Typing Speed Test',
            image: '/typingtest.png',
        },
        {
            title: 'Image Editor',
            image: '/imageeditor.png',
        },
        {
            title: 'Music Visualizer',
            image: '/musicvisualizer.png',
        },
    ];

    return (
        <div className="flex items-center justify-center relative h-screen bg-swirl">
            <ProfileAside/>
            <main data-aos="flip-up" className="w-[90%] lg:w-[60%] h-[90%] flex flex-col justify-start items-center p-8 bg-white border-2 border-black rounded-xl overflow-y-auto">
                <div className="w-full flex flex-row justify-start items-center space-x-4">
                        <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>
                        <span className="w-[40%] h-1 bg-blue-500"/>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => handleCardClick(project)}>
                            <CardContainer className="max-w-full group">
                                <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border hover:ring-2 hover:cursor-pointer">
                                    <CardItem translateZ="100" className="text-xl font-bold">
                                        {project.title}
                                    </CardItem>
                                    <CardItem translateZ="125" className="w-full flex justify-center my-4">
                                        <img src={project.image} className="rounded-xl border-2 border-black object-cover size-48"/>
                                    </CardItem>
                                    <div className="relative inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <span className="text-lg font-bold text-gray-700">Go to website</span>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
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
                {/* <div className="absolute bottom-0 p-4 text-white text-center">
                    <div className="flex flex-row justify-center space-x-2">
                        <h2 className="text-xs md:text-sm animate-spin ">*</h2>
                        <h3 className="text-black text-xs md:text-sm">Made with React, Typescript, Tailwind CSS, Next JS</h3>
                        <h2 className="text-xs md:text-sm animate-spin">*</h2>
                    </div>
                </div> */}
            </main>
            <NavigationAside/>
        </div>
    )
}