import { FaArrowDown, FaJava } from "react-icons/fa6"
import sphiwe from "../assets/sphiwe.jpeg"

export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="section-shell hero-layout">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="status-dot" /> JAVA BACKEND DEVELOPER</p>
                    <h1>
                        Building the <span>logic</span> behind better experiences.
                    </h1>
                    <p className="hero-intro">
                        I&apos;m Sphiwe Rodney Khubayi, a developer focused on Java and
                        Spring Boot. I enjoy turning ideas into thoughtful, dependable
                        software.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#projects">
                            Explore my work <span aria-hidden="true">↗</span>
                        </a>
                        <a className="text-link" href="#about">
                            A little about me <FaArrowDown aria-hidden="true" />
                        </a>
                    </div>
                    <div className="hero-stack">
                        <span>Working with</span>
                        <strong><FaJava aria-hidden="true" /> Java</strong>
                        <i aria-hidden="true" />
                        <strong>Spring Boot</strong>
                        <i aria-hidden="true" />
                        <strong>REST APIs</strong>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="photo-frame">
                        <img src={sphiwe} alt="Portrait of Sphiwe Rodney Khubayi" />
                    </div>
                    <div className="photo-note">
                        <span className="note-icon"><FaJava aria-hidden="true" /></span>
                        <span><strong>Backend-minded</strong><small>Curious by nature</small></span>
                    </div>
                    <span className="visual-orbit orbit-one" aria-hidden="true" />
                    <span className="visual-orbit orbit-two" aria-hidden="true" />
                </div>
            </div>
            <a className="scroll-cue" href="#about">
                <span>SCROLL TO EXPLORE</span><FaArrowDown aria-hidden="true" />
            </a>
        </section>
    )
}
