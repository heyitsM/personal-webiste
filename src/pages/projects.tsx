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
                            <Project title="Personal Website - Old" image="heyitsm.onrender.com.png" link="" github="https://github.com/heyitsM/heyitsM.github.io" description="A previous and unfinished personal website." />
                            <Project title="Personal Website" image="Personal-Webiste.png" link="" github="" description="description goes here" />
                            <Project title="Personal Website" image="Personal-Webiste.png" link="" github="" description="description goes here" />
                        </div>
                        <h1 className="text-4xl place-self-end justify-self-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            HELLO, MY NAME IS EMILY BERGER
                        </h1>
                    </div>
                </div>
                <div className="w-full pt-4 h-screen max-h-screen col-span-5 sm:col-span-2 lg:col-span-1" style={{backgroundColor:''}}>
                    <h1 className="text-4xl text-justify mb-4 sm:hidden font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        HELLO, MY NAME IS EMILY BERGER
                    </h1>
                    <div className="grid-container grid grid-cols-1 gap-3 justify-items-end mr-4 xs:mr-0 xxs:grid-cols-4 xxs:justify-items-center sm:justify-items-end sm:grid-cols-1 sm:gap-3">
                        <Slide title="HOME" link="/"/>
                        <Slide title=">PROJECTS" link="/projects"/>
                        <Slide title="RESUME" link="/resume"/>
                        <Slide title="CONTACT" link="/contact"/>
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