import { useState } from 'react'

interface SlideContent {
    title: string;
    link: string;
    current: string;
}

interface toggle {
    display: boolean;
}


export default function Slide(props:SlideContent) {
    const [showArrow, toggle] = useState<toggle>({display: false})
    const onhover = () => {
        console.log(showArrow)
        if (showArrow.display) {
            toggle({display: false});
        } else {
            toggle({display: true});
        }
        
    }

    return (
        <div className="xxs:mx-5 xs:mx-0 xs:text-left sm:mx-4 max-w-prose max-h-72">
            <h2 onMouseEnter={onhover} onMouseLeave={onhover} className="font-mono hover:font-sans text-4x1 sm:text-5xl lg:text-4x1 place-self-end justify-self-start font-extrabold leading-none tracking-tight text-gray-900 dark:text-violet-200">
                <a href={props.link}>
                    {props.current == props.title ? 
                        <div className="text-purple-700">{showArrow.display ? ">" : ""}{props.title}</div>
                        :      
                        <div>{showArrow.display ? ">" : ""}{props.title}</div>
                    }
                </a>
            </h2>
        </div>
    );
}