import '../../assets/css/style.css';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Javascript from '../../assets/images/javascript.png';
import Reactjs from '../../assets/images/react.png';
import Mysql from '../../assets/images/mysql.png';
import Git from '../../assets/images/git.png';


function Skills() {
    return (
        <div className="skills-container" id="skills">
        <div id="skills-head">
            <div id="skills-title">
                <a href="#">Skills</a>
            </div>
            <p>The skills, tools and technologies:</p>
        </div>
        <div id="skills-body">
            <div><img src={Html} alt="html" /><span>HTML</span></div>
            <div><img src={Css} alt="css" /><span>CSS</span></div>
            <div><img src={Javascript} alt="javascript" /><span>JavaScript</span></div>
            <div><img src={Reactjs} alt="react" /><span>React</span></div>
            <div><img src={Mysql} alt="mysql" /><span>MySQL</span></div>
            <div><img src={Git} alt="git" /><span>Git</span></div>
        </div>
    </div>
    );
}
export default Skills;