import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <div className="content-container">
        <div className="header-content">
          <Link className="header-title" to="/">
            <h1>Badin Project Manager</h1>
          </Link>
          <button className="button-link">Logout</button>
        </div>
      </div>
    </header>
    <div className="content-container">
      <div className="navigation">
        <NavLink to="/" activeClassName="is-active" exact>
          Home Page
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
