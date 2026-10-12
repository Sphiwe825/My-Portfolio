import NavBar from "./component/NavBar"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import Hero from "./page/Hero"

function App() {
    return (
       <>
       <main>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
       </main>
       </>
    )
}

export default App
