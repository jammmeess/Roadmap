import React, { useEffect, useState } from "react";

const Navbar = () => {
 
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <aside className="sidebar">
        <nav className="nav ps-2">
          <ul>
            <li>
              <a
                href="#Welcome"
                className={activeLink === "Welcome" ? "active" : ""}
              >
                Welcome to my Roadmap
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={activeLink === "About" ? "active" : ""}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#Journey"
                className={activeLink === "Journey" ? "active" : ""}
              >
                My Journey Begins
              </a>
            </li>
            <li>
              <a
                href="#Accenture"
                className={activeLink === "Accenture" ? "active" : ""}
              >
                Accenture Philippines
              </a>
            </li>
            <li>
              <a
                href="#Friends"
                className={activeLink === "Friends" ? "active" : ""}
              >
                Friends We Meet Along The Way
              </a>
            </li>
            <li>
              <a
                href="#SecondHome"
                className={activeLink === "SecondHome" ? "active" : ""}
              >
                My Second Home
              </a>
            </li>
            <li>
              <a
                href="#MyTeam"
                className={activeLink === "MyTeam" ? "active" : ""}
              >
                Meet my Team
              </a>
            </li>
            <li>
              <a
                href="#Party"
                className={activeLink === "Party" ? "active" : ""}
              >
                Let's Get this Party Started
              </a>
            </li>
            <li>
              <a
                href="#Continue"
                className={activeLink === "Continue" ? "active" : ""}
              >
                My Journey Continues
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Navbar;
