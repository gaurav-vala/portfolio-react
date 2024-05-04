import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto px-6 mt-6">
        <div>
          <ul className="flex justify-between bg-gray-950 py-6 px-8 rounded-full border-2 border-gray-50 border-opacity-50">
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
