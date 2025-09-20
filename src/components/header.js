import React, { useEffect, useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      let top = window.scrollY;

      sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `header nav a[href*='${id}']`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking a nav link
  const handleNavClick = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>

      {/* Hamburger Menu Icon */}
      <i
        className="bx bx-menu-alt-left bx-flip-horizontal bx-tada"
        id="menu-icon"
        onClick={() => setIsActive(!isActive)}
      ></i>

      {/* Nav Links */}
      <nav className={`nav ${isActive ? "active" : ""}`}>
        <a href="#home" className="active" onClick={handleNavClick}>Home</a>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#services" onClick={handleNavClick}>Services</a>
        <a href="#portfolio" onClick={handleNavClick}>Portfolio</a>
      </nav>
    </header>
  );
}

export default Header;
