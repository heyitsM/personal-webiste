import Image from 'next/image'
import Slide from '@/components/slide'
import Layout from '@/components/layout'
import ResumeComponent from '@/components/resume_component'

import '@/app/globals.css'

export default function Resume() {
  return (
    <Layout route="/resume">
      <div className="grid-container max-h-screen grid grid-cols-5 gap-7">
        <div className="w-full pl-4 mb-4 place-self-end hidden col-span-0 sm:flex sm:col-span-3 lg:col-span-4" style={{backgroundColor: ''}}>
            <div className="grid-container grid grid-cols-1 gap-8">
              <div className="w-full grid-container grid grid-cols-2 gap-4">
                <ResumeComponent title="EDUCATION" body="I am studying Computer Science at Johns Hopkins University, and am graduating in May of 2024. I concentrated on software development- software, testing, and team projects, along with web security and other associated topics. I also took a multitude of classes in a variety of other subject areas, including math, neuroscience, and psychology. Click below for a more in-depth exploration of my educational experience!" link=""/>
                <ResumeComponent title="WORK EXPERIENCE" body="During college, I completed one internship at SEO Tech Developer (Summer 2022) and worked on various projects (both personal and in classes/independent study projects). During High School, I worked as a professionally certified ski instructor and learned many valuable skills (feel free to email me to learn more). Click below for more information on projects I've worked on!" link="https://github.com/heyitsM"/>
                <ResumeComponent title="CLUBS/INVOLVEMENT" body="While I was in college, I was involved in multiple clubs including, toward the beginning, Jail Tutorial Project (a club involved in advocacy and tutoring individuals who are/have interacted with the prison system), and have also been involved with WiCS (Women in Computer Science) and ACM (Association of Computing Machinery). I was also a member of the Ski Club, and when I have free time, I enjoy running and enjoy discovering new music." link=""/>
                <ResumeComponent title="INTERESTS" body="I am interested in digging deeper into full-stack development, having experience with developing frontend projects (this website for example) and having experience with backend development as well. I've worked to develop applications in both Node/ExpressJS tech stacks and in Python/Flask stacks, and have some familiarity with Django. I would be very excited to get more experience in any of these domains." link=""/>
              </div>
              <h1 className="w-full text-4xl font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
                HELLO, MY NAME IS EMILY BERGER
              </h1>
            </div>
            
        </div>
        <div className="w-full pt-4 h-screen max-h-screen col-span-5 sm:col-span-2 lg:col-span-1" style={{backgroundColor:''}}>
          <h1 className="mx-4 text-4xl text-justify mb-4 sm:hidden font-extrabold leading-none tracking-tight text-indigo-950 md:text-5xl lg:text-6xl dark:text-indigo-200">
            HELLO, MY NAME IS EMILY BERGER
          </h1>
          <div className="grid-container grid grid-cols-1 gap-3 justify-items-end mr-4 xs:mr-0 xxs:grid-cols-4 xxs:justify-items-center sm:justify-items-end sm:grid-cols-1 sm:gap-3">
            <Slide title="HOME" link="/" current="RESUME"/>
            <Slide title="PROJECTS" link="/projects" current="RESUME"/>
            <Slide title="RESUME" link="/resume" current="RESUME"/>
            <Slide title="CONTACT" link="/contact" current="RESUME"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
