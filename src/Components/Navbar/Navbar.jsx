import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav-logo">German Precision</div>
        <ul className="nav-menu">
          <li>Explore</li>
          <li>About</li>
          <li>Contact</li>
          <li className="nav-login">Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
