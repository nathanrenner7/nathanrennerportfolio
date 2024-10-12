import React from 'react'
import Header from '../components/header'

// Define the structure for our video objects
interface Video {
    id: string
    title: string
    description: string
}

// Our list of videos
const videos: Video[] = [
    {
        id: 'QqDNtpvjFSY',
        title: 'PunishGUI',
        description: 'A simple plugin that allows administrators to punish and manage player punishments.'
    },
    {
        id: 'lNSAgL4ulGs',
        title: 'PrayStacker',
        description: 'Another simple plugin which allows players to stack their spawners, resulting in mob stacks to save server resources.'
    },
    {
        id: 'TSCsa-9iYas',
        title: 'Anti-Lavacast',
        description: 'Lavacasting is a common technique used to grief and lag servers, this plugin prevents lavacasting entirely.'
    },
    {
        id: 'Z2rzZRvQVjQ',
        title: 'CowMushroom Ban Gun',
        description: 'A craftable gun that bans players, which was originally designed for a youtubers SMP (Survival Multiplayer). '
    },
    {
        id: 'vyQJi31h56o',
        title: 'Zedar Visibility',
        description: 'Prevents players from seeing other players, but doesn\'t continue through worlds.'
    },
    {
        id: 'XeATOfgWRO4',
        title: 'Staff History',
        description: 'View a staff members punishment history, extremely useful for preventing staff abuse.'
    },
    {
        id: '59evhr7jMtU',
        title: 'Mod Mode',
        description: 'A mod mode which allows moderators to easily monitor players and includes staff chat.'
    },

    // Add more videos as needed
]

const MiscProjects = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">YouTube Video List</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <div key={video.id} className="rounded-lg shadow-md h-full bg-blue-500 text-gray-100 pb-32">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-md"
                            ></iframe>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                                <p className="text-gray-300">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MiscProjects;