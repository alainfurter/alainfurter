import { useNavigate } from 'react-router-dom'

import './Header.styles.css'

const Header = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  const navigateToProjects = () => {
    navigate('/projects');
  }

  return (
    <nav>
      <div className="main-nav-container">
        <div className="logo-container">
          <img src="images/logo.png" alt="Logo"/>
        </div>
        <div className="links-container">
          <ul id="menu">
            <li data-menuanchor="home active"><button id="moveToHome" onClick={navigateToHome}>Home</button></li>
            <li data-menuanchor="portfolio"><button id="moveToPortfolio" onClick={navigateToProjects}>Portfolio</button></li>
          </ul>
        </div>
      </div>
      <div className="special-projects-container">
        <ul id="special-projects">
          <li data-menuanchor="peaks-viewer">
              <img src="/images/projects/peaksviewer-icon.png" alt="Peaks Viewer Icon"/>
              <a href="https://www.peaksviewer.com" target="_blank" rel="noopener noreferrer"><div>Peaks Viewer</div></a>
          </li>
          <li data-menuanchor="wopr-crt">
            <img src="/images/projects/wopr-icon.png" alt="Peaks Viewer Icon"/>
            <a href="https://woprcrt.com" target="_blank" rel="noopener noreferrer"><div>WOPR CRT</div></a>
          </li>
          <li data-menuanchor="chain-rays">
            <img src="/images/projects/chainrays-icon.png" alt="Chain Rays Icon"/>
            <a href="https://www.chainrays.com/" target="_blank" rel="noopener noreferrer"><div>Chain Rays</div></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header