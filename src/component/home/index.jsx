import '../../assets/css/style.css';
import Navbar from '../navbar'
import Andri from '../../assets/images/andri2.png';
import Location from '../../assets/images/location.png';
import Available from '../../assets/images/available.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';
import Instagram from '../../assets/images/instagram.png'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="mobile-container" id="home">
                <div className="container1">
                    <div id="img-profile">
                        <img src={Andri} alt="Andri" />
                    </div> 
                    <div className="column">
                        <div className="text-content">
                            <span>Hi, I'm Andri👋</span>
                            <div><span>Software Developer</span></div>
                            <p>An Electrical Engineering Graduate who has a great enthusiast for learning about Software Development.
                                Passionate about developing, designing, and testing websites. Software skills include HTML, CSS, JavaScript, Bootstrap, 
                                React.js, and Git. Have interpersonal skills, problem-solving, time management, and eager to learn.
                            </p>
                        </div>
                        <div id="loc-github">
                            <a id="loc" href="#">
                                <img src={Location} alt="location" />
                                <span>Surabaya, Indonesia</span>
                            </a>
                            <a id="available" href="#">
                                <img src={Available} alt="Available" />
                                <span>Available for Freelance</span>
                            </a>
                        </div> 
                        <div id="medsos">
                            <a href="https://www.linkedin.com/in/andrianggoro21/" target="_blank"><img src={Linkedin} alt="linkedin" /></a>
                            <a href="https://github.com/andrianggoro21" target="_blank"><img src={Github} alt="github" /></a>
                            <a href="https://www.instagram.com/andrianggoro_/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}
export default Home;