import React from "react";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Front-End</h3>
          <p>I craft responsive and interactive websites using HTML, CSS, JavaScript, and React.</p>
        </div>

        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>ReactJS</h3>
          <p>I build dynamic and scalable web applications with reusable React components.</p>
        </div>

        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>UI/UX</h3>
          <p>I design user-friendly and visually appealing interfaces.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
