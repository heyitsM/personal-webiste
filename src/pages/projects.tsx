import Slide from "@/components/slide"
import Project from "@/components/project"
import Layout from "@/components/layout"
import '@/app/globals.css'

export default function Projects() {
    return (
        <Layout route='/projects'>
            <div className="grid-container max-h-screen grid grid-cols-5 gap-7">
                <div className="w-11/12 max-h-full pl-4 pb-4 hidden col-span-0 sm:flex sm:col-span-3 lg:col-span-4" style={{backgroundColor: ''}}>
                    <div className="grid w-full grid-cols-1">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mr-8 pt-4">
                            <Project title="Personal Website" image="Personal-Webiste.png" link="https://emily-heyitsm.vercel.app" github="https://github.com/heyitsM/personal-webiste" description="This is my current personal website." />
                            <Project title="Personal Website - Old" image="heyitsm.onrender.com.png" link="https://heyitsm.onrender.com" github="https://github.com/heyitsM/heyitsM.github.io" description="A previous and unfinished personal website." />
                            <Project title="EAR Chrome Extension" image="ear-detection.png" link="https://github.com/Kennnnn774/EAR-Detection-Tool" github="https://github.com/Kennnnn774/EAR-Detection-Tool" description="A tool to detect execute-after-redirect vulnerabilities with dynamic analysis." />
                            <Project title="Kinematics & Math Simulator" image="kinematics-simulator.onrender.com.png" link="https://kinematics-simulator.onrender.com" github="https://github.com/heyitsM/kinematics-simulator" description="A fun callback to my AP Physics days. This is a revival of one of my first side projects." />
                            
                        </div>
                        <h1 className="text-4xl place-self-end justify-self-start font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
                            HELLO, MY NAME IS EMILY BERGER
                        </h1>
                    </div>
                </div>
                <div className="w-full pt-4 h-screen max-h-screen col-span-5 sm:col-span-2 lg:col-span-1" style={{backgroundColor:''}}>
                    <h1 className="mx-4 text-4xl text-justify mb-4 sm:hidden font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
                        HELLO, MY NAME IS EMILY BERGER
                    </h1>
                    <div className="grid-container grid grid-cols-1 gap-3 justify-items-end mr-4 xs:mr-0 xxs:grid-cols-4 xxs:justify-items-center sm:justify-items-end sm:grid-cols-1 sm:gap-3">
                        <Slide title="HOME" link="/" current="PROJECTS" />
                        <Slide title="PROJECTS" link="/projects" current="PROJECTS"/>
                        <Slide title="ABOUT" link="/about" current="PROJECTS" />
                        <Slide title="CONTACT" link="/contact" current="PROJECTS" />
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:hidden gap-5 mx-4 pt-4">
                        <Project title="Personal Website" image="Personal-Webiste.png" link="https://emily-heyitsm.vercel.app" github="https://github.com/heyitsM/personal-webiste" description="This is my current personal website." />
                        <Project title="Personal Website - Old" image="heyitsm.onrender.com.png" link="https://heyitsm.onrender.com" github="https://github.com/heyitsM/heyitsM.github.io" description="A previous and unfinished personal website." />
                        <Project title="Personal Website" image="Personal-Webiste.png" link="" github="" description="description goes here" />
                        <Project title="Personal Website" image="Personal-Webiste.png" link="" github="" description="description goes here" />
                    </div>

                </div>
            </div>
        </Layout>
        
    )
};