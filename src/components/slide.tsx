interface SlideContent {
    title: string;
    link: string;
}


export default function Slide(props:SlideContent) {
    return (
        <div className="xxs:mx-5 xs:mx-0 xs:text-left sm:mx-10 max-w-prose max-h-72">
            <h2 className="text-4x1 place-self-end justify-self-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><a href={props.link}>{props.title}</a></h2>
        </div>
    );
}