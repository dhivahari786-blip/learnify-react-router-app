import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">Learnify</h2>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Users
        </NavLink>

        <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Courses
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;