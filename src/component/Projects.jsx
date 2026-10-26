import duvaziImage from "../assets/duvazi.png"
import feastImage from "../assets/feast_and_flavour.png"

const projects = [
    {
        number: "01",
        name: "Feast & Flavour",
        type: "Restaurant website concept",
        image: feastImage,
        alt: "Preview of the Feast & Flavour restaurant website",
        description:
            "A restaurant website concept featuring a food menu, promotional sections, and customer reviews.",
        tags: ["Web design", "Restaurant"],
    },
    {
        number: "02",
        name: "Duvazi Private School",
        type: "Education website concept",
        image: duvaziImage,
        alt: "Preview of the Duvazi Private School website",
        description:
            "A school website concept presenting academics, admissions, and essential school information.",
        tags: ["Web design", "Education", "SpringBoot", "Java", "MYSQL", "SQL"],
    },
]

export default function Projects() {
    return (
        <section className="projects-section section-shell" id="projects">
            <div className="section-heading projects-heading">
                <div>
                    <p className="eyebrow">SELECTED WORK</p>
                    <h2>Ideas made visible.</h2>
                </div>
                <p>
                    A couple of website concepts from my portfolio. I&apos;m continuing
                    to build and share more as I grow.
                </p>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-image-wrap">
                            <img src={project.image} alt={project.alt} loading="lazy" />
                            <span className="project-number">{project.number}</span>
                        </div>
                        <div className="project-content">
                            <p className="project-type">{project.type}</p>
                            <h3>{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
