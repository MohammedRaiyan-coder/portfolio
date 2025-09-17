import React from "react";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Latest <span>Projects</span></h2>
      <div className="portfolio-container">

        <div className="portfolio-box">
          <img src="images/calculator.png" alt="Calculator App" />
          <div className="portfolio-layer">
            <h4 className="mm">Calculator App</h4>
            <p>A responsive web calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with an interactive UI, demonstrating clean layout, and user-friendly design.</p>
            <a className="mm" href="https://calculator-rho-indol-34.vercel.app/"><i className="bx bx-link-alt"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/aichatbot.png" alt="AI Chatbot" />
          <div className="portfolio-layer">
            <h4 className="mm">Simple AI Chatbot</h4>
            <p>A simple chatbot built with Vite + React that provides an interactive user experience. It demonstrates my skills in state management, component design, and responsive UI while simulating real-time conversations.</p>
            <a className="mm" href="https://ai-chatbot-alpha-steel-45.vercel.app/"><i className="bx bx-link-alt"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/dentelo.png" alt="Dental clinic website" />
          <div className="portfolio-layer">
            <h4 className="mm">Dental Clinic Website</h4>
            <p>A dental clinic website is a professional online platform that showcases dental services, treatments, and facilities. It helps patients learn about the clinic, book appointments, access contact information, and explore oral health resources. With a clean design and user-friendly navigation, it builds trust and makes dental care more accessible.</p>
            <a className="mm" href="https://dental-clinic-website-gules.vercel.app/#home"><i className="bx bx-link-alt"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
