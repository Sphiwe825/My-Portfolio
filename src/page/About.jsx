import sphiwe from "../assets/sphiwe.jpeg"
export default function About() {
    return (
        <>
            <div className="about-grid">
                <article>
                    <div className="bio-header">
                        <h2>Hello There</h2>
                        <h3>I'm Sphiwe Rodney Khubayi</h3>
                    </div>
                    <div className="bio-text">
                        <p>Curently a 2nd year student a Sol Plaatjei University studying Diploma In ICT Application Development</p>
                        <p>I'm a young passionate Frontend/Backend Developer utilising Java, SpringBoot Framework and ReactJs</p>
                    </div>
                </article>

                <div className="hero-image">
                    <img src={sphiwe} alt="Sphiwe's Image" />
                </div>
            </div>

        </>
    )
}