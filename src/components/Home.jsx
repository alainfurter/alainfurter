import '../css/mousescrolling.css'
import './Home.styles.css'

const Home = () => {
  return (
    <section className="home-section">
        <div className="home-container">
            <div className="description-container">
                <h1>Software development, <br></br>Finance & Blockchain</h1>
                <p>Thanks for stopping by!</p>
                <p>I am a highly experienced finance executive and second career developer from Zurich with interests in blockchain, crypto, private equity and start-ups. I have over 30 years of programming experience on several plattforms and languages.</p>
                <a href="mailto:contact@alainfurter.com?subject=Inquiry for Alain Furter">
                    <button className="btn-hover btn-color">Get in Touch</button>
                </a>
            </div>
            <div className="hero-container">
                <img src="images/avatar_trans.png" alt="Avatar Image"/>
            </div>
        </div>
        {/* <div className="scroll-container">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="scroll">
              <div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div> */}
    </section>
    )
}

export default Home