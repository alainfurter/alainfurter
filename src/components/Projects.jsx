import { useState } from 'react'

import './Projects.styles.css'
import { PROJECTS } from '../js/projects'
import Project from './Project'

const Projects = () => {

    const [projects, setProjects] = useState(PROJECTS.slice().reverse());

    const handleLink = (event) => {
        window.open(event.target.getAttribute("project-link"), "_blank")
    }
    
    return (
        <section className="projects-section">
          <h1>Recent Portfolio</h1>
          <div id="projects-gallery" className="projects-gallery">
            {
              projects.map((project, index) => 
                 <Project key={index} id={index} project={project} />
              )
            }
          </div>
        </section>
    )
}

export default Projects