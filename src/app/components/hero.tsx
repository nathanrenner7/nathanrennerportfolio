import Image from "next/image";

const Hero = () => {
    return (
        <section id="about" className="mb-16 flex flex-col md:flex-row items-center">
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
                    I&apos;m a passionate web developer with a strong foundation in software engineering, especially Java, where I have over 7 years of experience. Throughout my career, I&apos;ve honed my skills in back-end development, working extensively with MongoDB for the past 3 years. Over the last two years, I&apos;ve shifted my focus towards full-stack development, using Next.js and TypeScript to build modern, scalable web applications. My goal is to continue learning and pushing the boundaries of what&apos;s possible with technology while delivering high-quality solutions.
                </p>
            </div>
        </section>
    );
}

export default Hero;