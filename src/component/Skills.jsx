const skillGroups = [
    {
        number: "01",
        title: "Backend",
        skills: ["Java", "Spring Boot", "REST APIs"],
    },
    {
        number: "02",
        title: "Data",
        skills: ["MySQL", "SQL"],
    },
    {
        number: "03",
        title: "Tools & frontend",
        skills: ["Git", "React", "JavaScript"],
    },
]

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="section-shell">
                <div className="section-heading skills-heading">
                    <div>
                        <p className="eyebrow">MY TOOLKIT</p>
                        <h2>Tools I&apos;m growing with.</h2>
                    </div>
                    <p>
                        A practical foundation across backend development, databases,
                        and the tools that bring applications together.
                    </p>
                </div>
                <div className="skill-grid">
                    {skillGroups.map(({ number, title, skills }) => (
                        <article className="skill-card" key={title}>
                            <span className="skill-number">{number}</span>
                            <h3>{title}</h3>
                            <div className="skill-tags">
                                {skills.map((skill) => <span key={skill}>{skill}</span>)}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
