interface ProjectContent {
    title: string;
    link: string;
    github: string;
    description: string;
    image: string;
}

export default function Project(props: ProjectContent) {
    return (
        <div className="rounded-lg p-4 h-fit bg-gradient-to-b from-indigo-950 via-violet-950 to-purple-950 hover:from-purple-950 hover:via-violet-950 hover:to-indigo-950" >
            <img className="rounded-md mb-2" src={props.image} alt={props.title}></img>
            <a href={props.link} target="_blank" className="font-bold text-lg">{props.title}</a>
            <br />
            {props.description}
            <br />
            <div className="grid grid-cols-2 mt-2">
                <a href={props.github}target="_blank">GitHub</a>
                <a href={props.link} className="justify-self-end" target="_blank">Visit</a>
            </div>
            
        </div>
    );
}