
export default function ProjectCard(props) {
    return(
        <section className="projectCard" style={{"border-color":"gray"}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <ol>
                <li>{props.tasks}</li>
            </ol>
        </section>
    )
}