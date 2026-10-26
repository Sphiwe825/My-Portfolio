import { FaGraduationCap } from "react-icons/fa6"

export default function About() {
    return (
        <section className="about-section section-shell" id="about">
            <div className="section-heading">
                <p className="eyebrow">A LITTLE ABOUT ME</p>
                <h2>Curiosity is where good code begins.</h2>
            </div>
            <div className="about-layout">
                <p className="about-lead">
                    I&apos;m an aspiring software developer who loves solving problems
                    and learning how the pieces of an application fit together.
                </p>
                <div className="about-detail">
                    <p>
                        My main interest is backend development with Java and Spring
                        Boot: designing clear APIs, working with data, and building
                        services that are reliable and easy to maintain. I also enjoy
                        exploring the frontend so I can better understand the whole
                        product.
                    </p>
                    <div className="education-card">
                        <span className="education-icon"><FaGraduationCap aria-hidden="true" /></span>
                        <span>
                            <small>Currently studying</small>
                            <strong>Diploma in ICT (Application Development)</strong>
                            <small>Sol Plaatje University</small>
                        </span>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
