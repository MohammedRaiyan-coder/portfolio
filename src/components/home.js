import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <h3>Hello, It’s me</h3>
        <h1>Mohammed Raiyan F</h1>
        <h3>
          And I'm a <span>Junior Front-End Developer</span>
        </h3>
        <p>
         Hi, I’m Mohammed Raiyan, a Junior Front-End Developer passionate about creating clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and React. I’m eager to contribute to real-world projects and grow as a developer.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100087949763258"><i className="bx bxl-facebook-square"></i></a>
          <a href="https://www.linkedin.com/in/mohammed-raiyan-f"><i className="bx bxl-linkedin-square"></i></a>
          <a href="mailto:mohammedraiya325@gmail.com"><i className="bx bx-envelope"></i></a>
          <a href="https://github.com/MohammedRaiyan-coder"><i className="bx bxl-git"></i></a>
        </div>
      </div>
      <div className="home-img">
        <img src="images/img.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
