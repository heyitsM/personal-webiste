import Slide from "@/components/slide"
import Project from "@/components/project"

import '@/app/globals.css'

export default function Contacts() {
    return (
        <div className="grid-container max-h-screen grid grid-cols-5 gap-7">
            <div className="w-full max-h-full pl-4 pb-4 hidden col-span-0 sm:flex sm:col-span-3 lg:col-span-4" style={{backgroundColor: ''}}>
                <div className="grid w-full grid-cols-1">
                    <h1 className="text-4xl place-self-end justify-self-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        <a href="https://www.linkedin.com/in/eberge11" className="block my-2 text-slate-700">LINKEDIN</a>
                        <a href="https://github.com/heyitsM" className="block my-2 text-slate-500">GITHUB</a>
                        <a href="mailto:eberge11@jhu.edu" className="block mt-2 mb-10 text-slate-300">EMAIL</a>
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
                    <Slide title="PROJECTS" link="/projects"/>
                    <Slide title="RESUME" link="/"/>
                    <Slide title=">CONTACT" link="/contact"/>
                </div>

            </div>
        </div>
    )
};