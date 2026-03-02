import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Manasa Portfolio</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;