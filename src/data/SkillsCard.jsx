
export default function SkillsCard(props){

    return(
        <>
        <div className="skills-card" key={props.id}>
            <h2>Stack {props.stack}</h2>
            <h3>Language: {props.name}</h3>
            <table>
                <td>
                    <tr>{props.icon} {props.name}</tr>
                    <tr><progress max={100} value={78} /></tr>
                </td>
            </table>
        </div>
        </>
    )
}