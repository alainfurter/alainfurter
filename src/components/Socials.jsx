import './Socials.styles.css'

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.twitter.com/FurterAlain" className="social-image-container" target="_blank" rel="noopener noreferrer">
        <img src="images/socials/twitter-icon-white.png" alt="Twitter image" />
      </a>        
      <a href="https://www.linkedin.com/in/alain-furter-18707315" className="social-image-container" target="_blank" rel="noopener noreferrer">
        <img src="images/socials/linkedin-icon-white.png" alt="Linkedin image" />
      </a>
      <a href="https://github.com/alainfurter" className="social-image-container" target="_blank" rel="noopener noreferrer">
        <img src="images/socials/github-icon-white.png" alt="Github image" />
      </a>
      <a href="mailto:contact@alainfurter.com?subject=Inquiry for Alain Furter" className="social-image-container">
        <img src="images/socials/mail-icon-white.png" alt="Email image" />
      </a>
    </div>
  )
}

export default Socials