import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav a");

    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
        link.parentElement.classList.add("active");
      }
    });
  }, []);

  return (
    <section>
      <aside className="sidebar">
        <nav className="nav ps-2">
          <ul>
            <li>
              <a href="#">Welcome to my Roadmap</a>
            </li>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#">My Journey Begins</a>
            </li>
            <li>
              <a href="#">Accenture Philippines</a>
            </li>
            <li>
              <a href="#">My Second Home</a>
            </li>
            <li>
              <a href="#">Meet my Team</a>
            </li>
            <li>
              <a href="#">Let's Get this Party Started</a>
            </li>
            <li>
              <a href="#">My Journey Continues</a>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Navbar;
