"use client"
import Slide from "@/components/slide"
import Project from "@/components/project"
import Layout from "@/components/layout"
import '@/app/globals.css'
import { motion } from "framer-motion";

export default function Contacts() {
    return (
        <Layout route='/contacts'>
            <div className="grid-container max-w-screen max-h-screen grid grid-cols-5 gap-7">
                <div className="w-full max-h-full pl-4 pb-4 hidden col-span-0 sm:flex sm:col-span-3 lg:col-span-4" style={{backgroundColor: ''}}>
                    <div className="grid w-full grid-cols-1">
                        <h1 className="text-4xl place-self-end justify-self-start font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
                            <a href="https://www.linkedin.com/in/eberge11" className="font-mono block my-2 text-indigo-900 dark:text-purple-700"><span className="hover:font-sans">LINKEDIN</span></a>
                            <a href="https://github.com/heyitsM" className="font-mono block my-2 text-violet-700"><span className="hover:font-sans">GITHUB</span></a>
                            <a href="mailto:eberge11@jhu.edu" className="font-mono block mt-2 mb-10 text-purple-700 dark:text-indigo-900"><span className="hover:font-sans">EMAIL</span></a>
                            <span className="font-sans">HELLO, MY NAME IS EMILY BERGER</span>
                        </h1>
                    </div>
                </div>
                <div className="grid-container grid grid-cols-1 w-full pt-4 h-screen max-h-screen col-span-5 sm:col-span-2 lg:col-span-1" style={{backgroundColor:''}}>
                    <div>
                        <h1 className="mx-4 sm:mx-0 text-4xl text-justify mb-4 sm:hidden font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
                            HELLO, MY NAME IS EMILY BERGER
                        </h1>
                        <div className="grid-container grid grid-cols-1 gap-3 justify-items-end mx-4 sm:mx-0 xxs:grid-cols-4 xxs:justify-items-center sm:justify-items-end sm:grid-cols-1 sm:gap-3">
                            <Slide title="HOME" link="/" current="CONTACT"/>
                            <Slide title="PROJECTS" link="/projects" current="CONTACT"/>
                            <Slide title="RESUME" link="/resume" current="CONTACT" />
                            <Slide title="CONTACT" link="/contact" current="CONTACT"/>
                        </div>
                    </div>
                    <h1 className="mx-4 sm:hidden text-4xl place-self-end justify-self-start font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
                        <a href="https://www.linkedin.com/in/eberge11" className="font-mono block my-2 text-purple-700 dark:text-indigo-900"><span className="hover:font-sans">LINKEDIN</span></a>
                        <a href="https://github.com/heyitsM" className="font-mono block my-2  text-violet-700"><span className="hover:font-sans">GITHUB</span></a>
                        <a href="mailto:eberge11@jhu.edu" className="font-mono block mt-2 mb-10  text-indigo-900 dark:text-purple-700"><span className="hover:font-sans">EMAIL</span></a>
                    </h1>
                </div>
            </div>
        </Layout>
        
    )
};