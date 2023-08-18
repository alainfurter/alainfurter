import "/fullpage/fullpage.cards.min.js"
import '/fullpage/fullpage.extensions.min.js'

import { PROJECTS } from "./projects"

const galleryElement = document.getElementById("projects-gallery")

const getProjectTemplate = (project) => {
  let techContainer = '';
  project.techs.forEach((tech, index) => {
    const getTechImageTemplate = (imageSrc, imageAlt) => /* html */ `
      <div class="tech-image">
        <img src="${imageSrc}" alt="${imageAlt}">
      </div>`;
      techContainer += getTechImageTemplate(tech, tech);
  })
  return /* html */ ` 
      <div class="project" role="button" id="${project.id}">
        <div class="image-container">
            <img src="${project.image}" alt="${project.name}">
        </div>
        <div class="project-text">
            <h2>${project.name}</h2>import "/fullpage/fullpage.cards.min.js"
            <p>${project.description}</p>
            <div class="button-container">
              <button class="project-links" project-link="${project.links[0]}">
                Github
                <img src="images/socials/github-icon-white.png" alt="Github">
              </button>
              <button class="project-links" project-link="${project.links[1]}">
                Web
                <img src="images/socials/web-icon-white.png" alt="Web">
              </button>
            </div>
            <div class="techs">${techContainer}</div>
        </div>
      </div>
    `
  }

const handleLink = (event) => {
    window.open(event.target.getAttribute("project-link"), "_blank")
}

const setupProjects = (projects) => {
    galleryElement.innerHTML = "";
    projects.slice().reverse().forEach((project) => {
        const template = getProjectTemplate(project)
        galleryElement.innerHTML += template
    })
    const linkButtons = document.querySelectorAll(".project-links")
    linkButtons.forEach((button) => {
        const projectLink = button.getAttribute("project-link")
        if (projectLink === "") {
            // eslint-disable-next-line no-param-reassign
            button.style = "display:none"
        } else {
            button.addEventListener("click", handleLink)
        }
    })
}

const homeButton = document.querySelector("#moveToHome")
const portfolioButton = document.querySelector("#moveToPortfolio")

homeButton.addEventListener("click", () => {
    fullpage_api.moveTo("home", 1)
})

portfolioButton.addEventListener("click", () => {
    fullpage_api.moveTo("portfolio", 1)
})

setupProjects(PROJECTS);

new fullpage('#fullpage', {
  anchors: ['home', 'portfolio'],
  menu: '#menu',
  slidesNavigation: true,
  scrollingSpeed: 600,
  autoScrolling: false,
  scrollOverflow: false,
  licenseKey: '6OMLK-7P2N7-I7Z06-N9236-ZWAVP',
  cards: true,
  cardsOptions: { perspective: 60, fadeContent: false, fadeBackground: false },
  cardsKey: 'D580527C-28B4404D-84B1D418-303F11E8',
});

console.log('Fullpage: ', myFullpage);
