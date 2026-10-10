import sphiwe from "../assets/sphiwe.jpeg"
import "../styles/hero.css"
export default function Hero(){
    return(
        <>
        <div className="hero-cover">
            <div className="hero-grid">
                <article>
                    <div className="article-header">
                        <h2>Hello There</h2>
                        <h3>I'm Sphiwe Rodney Khubayi</h3>
                    </div>
                    <div className="article-text">
                        <p>Curently a 2nd year student a Sol Plaatjei University studying Diploma In ICT Application Development</p>
                        <p>I'm a young passionate Frontend/Backend Developer utilising Java, SpringBoot Framework and ReactJs</p>
                    </div>
                </article>

                <div className="hero-image">
                    <img src={sphiwe} alt="Sphiwe's Image" />
                </div>
            </div>

            <div className="action-buttons">
                <button>[ Contact Me ]</button>
                <button>[ View Project ]</button>
            </div>
        </div>
        </>
    )
}