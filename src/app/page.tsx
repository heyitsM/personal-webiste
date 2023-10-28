import Image from 'next/image'
import Slide from '@/components/slide'

export default function Home() {
  return (
    <div className="grid-container max-h-screen grid grid-cols-5 gap-7">
      <div className="w-full pl-4 mb-4 place-self-end hidden col-span-0 sm:flex sm:col-span-3 lg:col-span-4" style={{backgroundColor: ''}}>
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            HELLO, MY NAME IS EMILY BERGER
          </h1>
      </div>
      <div className="w-full pt-4 h-screen max-h-screen col-span-5 sm:col-span-2 lg:col-span-1" style={{backgroundColor:''}}>
        <h1 className="text-4xl text-justify mb-4 sm:hidden font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          HELLO, MY NAME IS EMILY BERGER
        </h1>
        <div className="grid-container grid grid-cols-1 gap-3 justify-items-end mr-4 xs:mr-0 xxs:grid-cols-4 xxs:justify-items-center sm:justify-items-end sm:grid-cols-1 sm:gap-3">
          <Slide title="Home" link="/"/>
          <Slide title="Projects" link="/"/>
          <Slide title="Resume" link="/"/>
          <Slide title="Contact" link="/"/>
        </div>
        
      </div>
      
    </div>
  )
}
