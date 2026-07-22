import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav>
      <Link className="a" to={"/"}>
        <h1>
          SAS <span>Seenne Architecture Studio</span>
        </h1>
      </Link>

      <i
        className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"} fa-xl icon`}
        onClick={toggleMenu}
      ></i>

      <ul className={openMenu ? "opened" : ""}>
        <Link className="a" to="/" onClick={() => setOpenMenu(false)}>
          <li>Home</li>
        </Link>

        <Link className="a" to="/works" onClick={() => setOpenMenu(false)}>
          <li>Works</li>
        </Link>

        <Link className="a" to="/studio" onClick={() => setOpenMenu(false)}>
          <li>Studio</li>
        </Link>

        <Link className="a" to="/services" onClick={() => setOpenMenu(false)}>
          <li>Services</li>
        </Link>

        <Link className="a" to="/contact" onClick={() => setOpenMenu(false)}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
