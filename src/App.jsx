import NavBar from "./component/NavBar"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import About from "./page/About"
import Hero from "./page/Hero"
import resume from "./assets/Sphiwe Rodney Khubayi.pdf"

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <section className="contact-section" id="contact">
                    <div className="section-shell contact-panel">
                        <p className="eyebrow">GET IN TOUCH</p>
                        <h2>Let&apos;s build something meaningful.</h2>
                        <p>
                                I&apos;m open to connecting with fellow developers and exploring
                            opportunities to grow as a Java backend developer.
                        </p>
                            <a className="button button-primary" href={resume} target="_blank" rel="noreferrer">
                                View my résumé <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <span>Sphiwe Rodney Khubayi</span>
                <span>Java · Spring Boot · Always learning</span>
            </footer>
        </>
    )
}

export default App
