import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        {/* Add alt prop with meaningful text or an empty string */}
        <img src="./logo.svg" className="nav-logo" alt="Company Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
