import Image from "next/image";

const Hero = () => {
    return (
        <section id="about" className="mb-16 flex flex-col md:flex-row items-center justify-center">
            <div className="w-[250px] h-[250px] mb-8 md:mb-0 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="/nathanpfp.jpg"
                    alt="Nathan Renner"
                    width={500}
                    height={500}
                    className="object-cover object-center w-full h-full scale-150"
                />
            </div>
            <div className="md:w-2/3 md:pl-8 md:flex-none flex flex-col md:items-start items-center md:text-start text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Nathan Renner</h1>
                <p className="text-xl text-gray-600 mb-6">Full-Stack Web Developer</p>
                <p className="text-gray-700 leading-relaxed">
                    I am a full-stack developer with over 8 years of software development, beginning with a strong foundation of OOP through Java. Over the past 3 years, my goals have shifted to building modern and scalable web applications using modern technology such as React, Next.js, Typescript, Redis, and MongoDB. I have worked for a variety of clients through freelance projects, with an emphasis on working with content creators in the Web 3 gambling niche. I am passionate about maintaining clean yet highly optimized code that provides an intuitive user experience.
                </p>
            </div>
        </section>
    );
}

export default Hero;