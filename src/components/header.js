import React, { useEffect } from "react";

function Header() {
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

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>
      <i className="bx bx-menu-alt-left bx-flip-horizontal bx-tada" id="menu-icon"></i>
      <nav className="nav">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
}

export default Header;
