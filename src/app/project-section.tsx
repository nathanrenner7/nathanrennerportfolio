"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Check } from "lucide-react"
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Headed.gg | Next.js Website",
        description: "Headed.GG is a place to stay up-to-date with all Headed and HeadedCSGO videos, wager contests for various gambling sites, and bonuses offered to those sites.",
        link: "https://www.headed.gg/",
        language: "typescript"
    },
    {
        title: "Performaxglobalinc.com | Next.js Website",
        description: "Performaxglobalinc.com is a place to learn about and book perfomax global's private soccer trainings, group sessions, or lab sessions.",
        link: "http://www.performaxglobalinc.com/",
        language: "typescript"
    },
    {
        title: "Oneaway.gg | Next.js Website",
        description: "Oneaway.GG is a leaderboard site to stay up-to-date with all Oneaway, Kenzo, and LamboXD, wager contests for various gambling sites.",
        link: "https://www.oneaway.gg/",
        language: "typescript"
    },
    {
        title: "Bonustemple.com | Next.js Website",
        description: "Bonustemple.GG is a place to stay up-to-date with all bonustemple's bonuses offered to various gambling sites.",
        link: "https://www.bonustemple.com/",
        language: "typescript"
    },
    {
        title: "Global Events | Minecraft Plugin",
        description: "GlobalEvents is a Minecraft plugin designed to spice up your server with server-wide events, spicing up gameplay by adding dynamic and engaging experiences for players.",
        github: "https://github.com/nathanrenner7/GlobalEvents",
        language: "java"
    },
    {
        title: "Simple Staff Chat | Minecraft Plugin",
        description: "Simple Staff Chat is a lightweight staff-chat plugin which allows direct communication between administrators on a minecraft network. It's extremely lightweight and has almost no effect on network resources.",
        link: "https://www.spigotmc.org/resources/simplestaffchat.97518/",
        github: "https://github.com/nathanrenner7/SimpleStaffChat",
        language: "java"
    },
    {
        title: "AntiCurse | Discord Bot",
        description: "AntiCurse is a simple discord profanity filter and mute bot. It allows connection to MongoDB for more complex configuration and multi-server use; however, connection to MongoDB is not required.",
        github: "https://github.com/nathanrenner7/AntiCurse",
        language: "java"
    },
    {
        title: "ValRankGuesser | Discord Bot",
        description: "ValRankGuesser is a discord bot designed to engage users with a fun challenge: guess the rank of players in Valorant based on a clip of them. It requires connection to MongoDB for leaderboard statistics and has an optional GUI mode.",
        github: "https://github.com/nathanrenner7/ValRankGuesser",
        language: "java"
    },
    {
        title: "McRoulette | Minecraft Plugin",
        description: "McRoulette is a Minecraft plugin developed for version 1.16, allowing players to engage in a roulette-style game. This plugin adds a unique and fun gambling element to Minecraft servers.",
        link: "https://youtu.be/WOn1XEmdccw",
        github: "https://github.com/nathanrenner7/SimpleStaffChat",
        language: "java"
    },
    {
        title: "Miscellaneous Projects",
        description: "Unfortunately I have lost code to multiple fun projects before I normalized using GitHub, if you would like to view archived videos showcasing some of these projects click below!",
        link: "/misc-projects",
        plural: true
    },
    {
        title: "Portfolio | Next.js Website",
        description: "This is the webpage you're on now! It's a simple and sleek yet informative website about me as a developer and a person. It showcases much of my work and is responsive on all devices!",
        link: "https://nathanrennerportfolio.vercel.app",
        github: 'https://github.com/nathanrenner7/nathanrennerportfolio',
        language: "typescript",
    },
]

const ProjectSection = () => {
    const [javaSelected, setJavaSelected] = useState(true);
    const [typescriptSelected, setTypescriptSelected] = useState(true);
    const [otherSelected, setOtherSelected] = useState(true);
    const [openSourceSelected, setOpenSourceSeleced] = useState(true);

    const [filterProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        setFilteredProjects(projects.filter(project => {
            if(project.github && !openSourceSelected) return false;
            if (project.language === "java" && javaSelected) return true;
            if (project.language === "typescript" && typescriptSelected) return true;
            if (!project.language && otherSelected) return true;
            return false;
        }))
    }, [javaSelected, typescriptSelected, otherSelected, openSourceSelected])

    return (
        <section id="projects" className="mb-16 lg:mx-24">
            <div className="flex items-center gap-x-8 mb-8 md:justify-start justify-center">
                <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-blue-500 rounded-md px-4 py-1 text-white ">Filter</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="flex items-center gap-x-1" onClick={() => setJavaSelected(prevState => !prevState)}>Java {javaSelected && <Check size={12} />}</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-x-1" onClick={() => setTypescriptSelected(prevState => !prevState)}>Typescript {typescriptSelected && <Check size={12} />}</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-x-1" onClick={() => setOtherSelected(prevState => !prevState)}>Other {otherSelected && <Check size={12} />}</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-x-1" onClick={() => setOpenSourceSeleced(prevState => !prevState)}>Open Source {openSourceSelected && <Check size={12} />}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filterProjects.map((project, index) => (
                    <Card key={index} className="bg-white shadow-lg h-max">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-gray-800">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between">
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className={`flex justify-between items-center`}>
                                <div className={`flex ${project.link && project.github && "gap-x-4"}`}>
                                    {project.link && <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-500 hover:text-blue-800 transition-colors"
                                    >

                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        View Project
                                        {project.plural && "s"}</a>}
                                    {project.github && <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-500 hover:text-gray-800 transition-colors"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </a>}
                                </div>
                                {project.language && <div className={`${project.language === "java" ? "bg-orange-400" : "bg-blue-500"} text-white font-medium px-4 py-1 rounded-full flex items-center gap-x-2`}>
                                    {project.language === "java" ? <FaJava /> : <SiTypescript />}
                                    {capitalizeFirstLetter(project.language)}</div>}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}