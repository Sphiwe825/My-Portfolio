import { FaJava } from "react-icons/fa6"
import ProjectCard from "../data/ProjectCard"

export default function Projects(){
    const projects = [
        {
            id: 1,
            title: "Demo 1",
            description: "DESC",
            img: "",
            alt: "ALT",
            techTools: [
                "MYSQL", "Java", "SpringBoot"
            ],
            demoLive: "http://github.com",
            gitHubLink: "https://github.com"
        }
    ]
    return(
        <>
        <div className="projects-cover">
            <div className="projects-grid">
                <article>
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </article>
            </div>
        </div>
        </>
    )
}