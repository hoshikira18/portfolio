import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow px-4 py-2 border-r border-border">
      <ul className="flex flex-col gap-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
