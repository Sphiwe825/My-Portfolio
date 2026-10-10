import { FaReact } from "react-icons/fa6"
import SkillsCard from "../data/SkillsCard"

export default function Skills(){
    const skillsData = [
        {
            id: 1,
            stack: "Frontend",
            name: "ReactJs",
            icon: <FaReact />
        },
        {
            id: 1,
            stack: "Frontend",
            name: "ReactJs",
            icon: <FaReact />
        },
        {
            id: 1,
            stack: "Backend",
            name: "ReactJs",
            icon: <FaReact />
        }
    ]

    const frontendSkills = skillsData.filter((s) => s.stack == "Frontend")
    const backendSkills = skillsData.filter((s) => s.stack == "Backend")
    return(
        <>
        <div className="skills-cover">
            <div className="fronted-skills">
                <h2>Fronted</h2>
                {frontendSkills.map((s) =>(
                    <SkillsCard key={s.id} name={s.name} icon={s.icon} stack={s.stack}/>
                ))}
            </div>

            <div className="backend-skills">
                <h2>Backend</h2>
                {backendSkills.map((s) => (
                    <SkillsCard key={s.id} name={s.name} icon={s.icon} stack={s.stack}/>
                ))}
            </div>
        </div>
        </>
    )
}