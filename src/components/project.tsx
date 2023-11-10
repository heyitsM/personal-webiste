interface ProjectContent {
    title: string;
    link: string;
    github: string;
    description: string;
    image: string;
}

export default function Project(props: ProjectContent) {
    return (
        <div className="rounded-lg p-4 h-fit border-2 border-indigo-900/50 hover:border-indigo-900/20 backdrop-blur-sm bg-gradient-to-b from-indigo-950/20 via-violet-950/20 to-purple-950/20 dark:hover:from-purple-950/50 dark:hover:via-violet-950/50 dark:hover:to-indigo-950/50 hover:from-purple-950/10 hover:via-violet-950/10 hover:to-indigo-950/10" >
            <img className="rounded-md mb-2" src={props.image} alt={props.title}></img>
            <a href={props.link} target="_blank" className="font-bold text-xl text-violet-800 dark:text-violet-600">{props.title}</a>
            <br />
            <span className="text-indigo-800 dark:text-indigo-500">{props.description}</span>
            <br />
            <div className="grid grid-cols-2 mt-2 text-indigo-950 dark:text-violet-300">
                <a href={props.github}target="_blank">GitHub</a>
                <a href={props.link} className="justify-self-end" target="_blank">Visit</a>
            </div>
            
        </div>
    );
}