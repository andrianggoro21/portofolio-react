import logo from '../../assets/images/logo.png'
import '../../assets/css/style.css'

function Navbar() {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
      <div className="topnav" id="myTopnav">
        <div>
          <img src={logo} alt="logo" />
        </div>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#contact">Contact</a>
          <a className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
    );
}
export default Navbar