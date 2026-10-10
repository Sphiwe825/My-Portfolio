
export default function ProjectCard({project}) {
    return (
        <>
            <div className="project-card">
                <img src={project.img} alt={project.alt} className="project-img" />
                <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tools">
                        {project.techTools.map((t) => (
                            <span key={t}>{t}</span>
                        ))
                        }
                    </div>
                    <div className="links">
                        {project.demoLive && <a href={project.demoLive} target="_blank">Live Demo</a>}
                        {project.gitHubLink && <a href={project.gitHubLink} target="_blank">Github</a>}
                    </div>
                </div>
            </div>
        </>
    )
}