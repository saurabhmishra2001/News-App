import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">
          Picture News{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/general">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle active"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
                <Link className="dropdown-item" to="/business">
                  Business
                </Link>
                <Link className="dropdown-item" to="/entertainment">
                  Entertainment
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/health">
                  Health
                </Link>
                <Link className="dropdown-item" to="/science">
                  Science
                </Link>
                <Link className="dropdown-item" to="/sports">
                  Sports
                </Link>
                <Link className="dropdown-item" to="/technology">
                  technology
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
