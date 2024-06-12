import { Link, NavLink } from "react-router-dom";
import GithubSvg from "../components/svg/githubSvg.jsx"

export default function Footer() {
  
  return (

        <div className="footer">
          <div className="footer-left">
              <div className="githubLink">
                  <Link to="contact"><GithubSvg /></Link>
              </div>
          </div>
          <div className="footer-right">
            <ul>
                <li>
                  <NavLink to="about" onClick={() => setMenuOpen(!menuOpen)}>ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="work" onClick={() => setMenuOpen(!menuOpen)}>WORK</NavLink>
                </li>
                <li>
                  <NavLink to="contact" onClick={() => setMenuOpen(!menuOpen)}>CONTACT</NavLink>
                </li>
            </ul>
        </div>
        </div>


  );
};