import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleNavLinkClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="//" onClick={() => setActiveTab("")}>
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink to="//" end className="nav-link" activeClassName={activeTab === "Characters" ? "active" : ""} onClick={() => handleNavLinkClick("Characters")}>
              Characters
            </NavLink>
          </li>
          &nbsp;/&nbsp;
          <li>
            <NavLink to="/comics" className="nav-link" activeClassName={activeTab === "Comics" ? "active" : ""} onClick={() => handleNavLinkClick("Comics")}>
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
