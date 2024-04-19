'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationAside from "@/components/sections/navigationAside";
import ProfileAside from "@/components/sections/profileAside";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Resume() {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    const educations = [
        {
            type: 'Bachelor of Science - Elon University',
            major: 'Computer Science',
            minor: 'Data Science & Game Design',
            date: 'May 2024',
            location: 'Elon, NC'
        },
    ];

    const experiences = [
        {
            title: 'Solutions Engineer - Tryon Solutions',
            date: 'June 2024-Present',
            location: 'Raleigh, NC'
        },
        {
            title: 'Student Consultant / Team Lead - Elon University',
            date: 'February 2022-May 2024',
            location: 'Elon, NC'
        },
        {
            title: 'Computer & Data Services Intern - SAS Institute',
            date: 'May 2023-August 2023',
            location: 'Cary, NC'
        },
        {
            title: 'Client Engineering & Technical Sales Intern - IBM',
            date: 'June 2022-August 2022',
            location: 'Remote'
        },
    ];

    const skills = [
        {
            name: 'Web Design',
            percentage: 85
        },
        {
            name: 'Mobile App',
            percentage: 65
        },
        {
            name: 'Illustrator',
            percentage: 65
        },
        {
            name: 'Photoshop',
            percentage: 72
        },
    ];

    const knowledge = [
        'Digital Design',
        'Marketing',
        'Communication',
        'Social Media',
        'Time Management',
        'Flexibility',
        'Print',
    ];

    return (
        <>
            <div className="flex items-center justify-center relative h-screen bg-swirl">
                <ProfileAside/>
                <main data-aos="flip-up" className="w-[90%] lg:w-[60%] h-[90%] flex flex-col items-center justify-start p-8 bg-white border-2 border-black rounded-xl overflow-y-auto">
                    <div className="w-full flex flex-row justify-start items-center space-x-4">
                        <h1 className="text-3xl lg:text-4xl font-bold">Resume</h1>
                        <span className="w-[40%] h-1 bg-blue-500"/>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-8 mt-4">
                        <div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Education</h3>
                            <ul className="space-y-3">
                                {educations.map((education, index) => (
                                    <li key={index}>
                                        <Card className="min-h-max bg-white p-4">
                                            <CardHeader className="w-full p-0">
                                                <CardTitle className="text-sm md:text-md">{education.type}</CardTitle>
                                                <CardDescription className="text-sm md:text-md">Major: {education.major}</CardDescription>
                                                <CardDescription className="text-sm md:text-md">Minor(s): {education.minor}</CardDescription>
                                                <CardDescription className="text-sm md:text-md">{education.date}</CardDescription>
                                                <CardDescription className="text-sm md:text-md">{education.location}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Experience</h3>
                            <ul className="space-y-3">
                                {experiences.map((experience, index) => (
                                    <li key={index}>
                                        <Card className="min-h-max bg-white p-4">
                                            <CardHeader className="w-full p-0">
                                                <CardTitle className="text-sm md:text-md">{experience.title}</CardTitle>
                                                <CardDescription className="text-sm md:text-md">{experience.date}</CardDescription>
                                                <CardDescription className="text-sm md:text-md">{experience.location}</CardDescription>
                                            </CardHeader>
                                            <CardFooter className="w-full flex justify-end p-0">
                                                <Button variant="default">Read More</Button>
                                            </CardFooter>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Working Skills</h3>
                                <ul className="space-y-2">
                                    {skills.map((skill, index) => (
                                        <li key={index}>
                                            <div className="flex justify-between">
                                                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                                <span className="text-sm text-gray-500">{skill.percentage}%</span>
                                            </div>
                                            <Progress className="w-full bg-gray-200 rounded h-2 mt-1" value={skill.percentage} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Knowledge</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                {knowledge.map((item, index) => (
                                    <Badge key={index} variant="secondary">{item}</Badge>
                                ))}
                                </div>
                            </div>
                    </div>
                    <div className="absolute bottom-0 p-4 text-white text-center">
                        <div className="flex flex-row justify-center space-x-2">
                            <h2 className="text-xs md:text-sm animate-spin ">*</h2>
                            <h3 className="text-xs md:text-sm">Made with React, Typescript, Tailwind CSS, Next JS</h3>
                            <h2 className="text-xs md:text-sm animate-spin">*</h2>
                        </div>
                    </div>
                </main>
                <NavigationAside/>
            </div>
        </>
    )
}