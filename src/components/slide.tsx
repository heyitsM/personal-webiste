interface SlideContent {
    title: string;
    link: string;
}


export default function Slide(props:SlideContent) {
    return (
        <div className="rounded-lg xxs:mx-5 xs:mx-0 xs:text-left sm:mx-10 max-w-prose max-h-72 text-center sm:text-left" >
            <a href={props.link}>{props.title}</a>
        </div>
    );
}