// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
