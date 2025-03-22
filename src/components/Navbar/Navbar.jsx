import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    document.body.classList.toggle('sidebar-collapsed', !isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header className="sidebar-header">
        <a href="#" className="header-logo">
          <h1>{isCollapsed ? "Ll" : "LeoEller"}</h1>
        </a>
        <button className="toggler sidebar-toggler" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">
            {isCollapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>
        <button className="toggler menu-toggler" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">Menu</span>
        </button>
      </header>

      <div className="nav-container">
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon material-symbols-outlined">home</span>
                <span className="nav-label">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon material-symbols-outlined">
                  Person
                </span>
                <span className="nav-label">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon material-symbols-outlined">
                  Devices
                </span>
                <span className="nav-label">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon material-symbols-outlined">Call</span>
                <span className="nav-label">Contacts</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;