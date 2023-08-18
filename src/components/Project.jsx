import './Project.styles.css'

const Project = ({ project, id }) => {

    const handleLink = (event) => {
        window.open(project.links[Number(event.target.id) - 1], "_blank")
    }

    const createTech = (tech) => {
        return (
            <div className="tech-image">
                <img src={tech} alt={tech}/>
            </div>
        )};

    return (
        <div key={id} className="project" role="button" id="${project.id}">
            <div className="image-container">
                <img src={project.image} alt={project.name}/>
            </div>
            <div className="project-text">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            <div className="button-container">
            <button className="project-links" id="1" onClick={handleLink}>
                Github
                <img src="images/socials/github-icon-white.png" alt="Github"/>
            </button>
            <button className="project-links" id="2" onClick={handleLink}>
                Web
                <img src="images/socials/web-icon-white.png" alt="Web"/>
            </button>
            </div>
            <div className="techs">
                {project.techs.map((tech, index) => (
                    createTech(tech)
                ))}
            </div>
        </div>
    </div>
    )
}

export default Project