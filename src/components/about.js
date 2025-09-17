import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/img.jpg" alt="About Me" />
      </div>
      <div className="about-container">
        <div className="skills">
          <h1>ABOUT <span>ME</span></h1>

          <h3>Education</h3>
          <p>
            Bachelor of Computer Science Engineering at C. Abdul Hakeem College of Engineering & Technology, Anna University
            <br /> <em>06/2021 - 06/2025</em>
          </p>

          <h3>Skills That Reflect My Knowledge</h3>
          <p>
            As a passionate front-end developer, I’ve built a strong foundation in modern web technologies...
          </p>

          <h3>Technical Skills</h3>
          <ul>
            <li><strong>HTML & CSS3</strong> – Semantic structure, modern layouts with Flexbox and Grid</li>
            <li><strong>JavaScript</strong> – DOM manipulation, event handling</li>
            <li><strong>React.js</strong> – Components, props, hooks, state</li>
            <li><strong>Bootstrap</strong> – Quick responsive UI</li>
            <li><strong>Tailwind CSS</strong> – Utility-first framework</li>
          </ul>

          <h3>Tools & Platforms</h3>
          <ul>
            <li><strong>Git & GitHub</strong></li>
            <li><strong>VS Code</strong></li>
            <li><strong>Vercel</strong> – deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
