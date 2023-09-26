import '../../assets/css/style.css';
import Project1 from '../../assets/images/project1.PNG';
import Project2 from '../../assets/images/project2-1.PNG';
import Project3 from '../../assets/images/project3.PNG';
import Project4 from '../../assets/images/project4.PNG';


function Portofolio() {
    return (
        <div className="port-container" id="portofolio">
        <div id="port-head">
            <div id="port-title">
                <a href="#">Portofolio</a>
            </div>
            <p>Here is a quick summary of my portofolio:</p>
        </div>
        <div id="port-body">
            <a href="https://streamin-movie.netlify.app/" target="_blank"><img src={Project1} alt="project1" /></a>
            <a href="#"><img src={Project4} alt="project2" /></a>
            <a href="#"><img src={Project3} alt="project3" /></a>
            <a href="#"><img src={Project2} alt="project4" /></a>
        </div>
    </div>
    )
}
export default Portofolio;