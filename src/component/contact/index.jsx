import '../../assets/css/style.css';
import Email from '../../assets/images/email.png';
import Copy from '../../assets/images/copy.png';
import Telp from '../../assets/images/telp.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';
import Instagram from '../../assets/images/instagram.png';

function Contact () {
    return (
        <div className="contact-container" id="contact">
        <div id="contact-head">
            <div id="port-title">
                <a href="#">Contact Me</a>
            </div>
            <p>Below are my contacts</p>
        </div>
        <div id="contact-body">
            <div id="email">
                <img src={Email} alt="email" />
                <span>andri.anggoro21@gmail.com</span>
                <img src={Copy} alt="copy" />
            </div>
            <div id="telp">
                <img src={Telp} alt="telp" />
                <span>+6281331751570</span>
                <img src={Copy} alt="copy" />
            </div>
            <div id="medsos2">
                <a href="https://www.linkedin.com/in/andrianggoro21/" target="_blank"><img src={Linkedin} alt="linkedin" /></a>
                <a href="https://github.com/andrianggoro21" target="_blank"><img src={Github} alt="github" /></a>
                <a href="https://www.instagram.com/andrianggoro_/" target="_blank"><img src={Instagram} alt="instagram" /></a>
            </div>
        </div>
    </div>
    )
}
export default Contact;