import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import Mubaraq from "./public/Mubaraq.png";
import manage from "./public/manage.png";
import easybank from "./public/easybank.png";
import flowrise from "./public/flowrise.png";
import rpsp from "./public/rpsp.png";

document.querySelector("#app").innerHTML = `

  <div class="container">
    <section class="section">
        <div class="photo-frame">
          <img src=${Mubaraq} class="photo-image" alt="my-photo">
        </div>
        <h1 id="name">Momoh Al-Mubaraq</h1>       
        <p id="about">I am a young and dedicated person with ability to apply my skills to improve work processes and environment and also the willingness to adapt myself to new learnings to improve and shape my focus.</p>
        <div class="grid">
          <div>
            <h2 class="title">Date of Birth</h2>
            <div class="value">07/01/2003</div>
          </div>
          <div>
            <h2 class="title">Address</h2>
            <div class="value">28 Alonge Street, Ikotun, Lagos – Nigeria</div>
          </div>
          <div>
            <h2 class="title">E-mail Address</h2>
            <div class="value">momohmubaraq@gmail.com</div>
          </div>
          <div>
            <h2 class="title">Phone Number</h2>
            <div class="value">+234(0)8086627509</div>
        </div>
      </div> 
    </section>
    <section class="section">
      <h1 class="section-title">Skills</h1>
      <div class="skills-grid">
      <h3 class="skill-name">Web Development</h3>
      <div class="skill-container">
        <div class="skills web">70%</div>
      </div>
      <h3 class="skill-name">Hardware interfacing</h3>
      <div class="skill-container">
        <div class="skills hardware">60%</div>
      </div>
      <h3 class="skill-name">Problem solving skills</h3>
      <div class="skill-container">
        <div class="skills problem">85%</div>
      </div>
      <h3 class="skill-name">Troubleshooting skills</h3>
      <div class="skill-container">
        <div class="skills troubleshooting">90%</div>
      </div>
      <h3 class="skill-name">Researching skills</h3>
      <div class="skill-container">
        <div class="skills research">90%</div>
      </div>
      <h3 class="skill-name">Team Player</h3>
      <div class="skill-container">
        <div class="skills player">100%</div>
      </div>
      </div>
    </section>
    <section class="section">
      <h1 class="section-title">Portfolio</h1>
      <div class="portfolio-grid">
      <div class="project-frame">
      <img src=${rpsp} class="project-image">
      </div>
      <div class="portfolio-info">
      <p class="project-name">Rock-Paper-Scissors</p>
      <a href="https://rock-paper-scissors-lizard-spock-beta.vercel.app/"  target="_blank">Visit Live</a>
      </div>
      <div class="project-frame">
      <img src=${flowrise} class="project-image">
      </div>
      <div class="portfolio-info">
      <p class="project-name">Flowrise</p>
      <a href="https://flowrise-pink.vercel.app/"  target="_blank">Visit Live</a>
      </div>
      <div class="project-frame">
      <img src=${manage} class="project-image">
      </div>
      <div class="portfolio-info">
      <p class="project-name">Manage</p>
      <a href="https://manage-orpin-one.vercel.app/"  target="_blank">Visit Live</a>
      </div>
      <div class="project-frame">
      <img src=${easybank} class="project-image">
      </div>
      <div class="portfolio-info">
      <p class="project-name">Easybank</p>
      <a href="https://easybank-henna-two.vercel.app/"  target="_blank">Visit Live</a>
      </div>
      </div>
    </section>
    <section class="section">
      <h1 class="section-title">Education</h1>
      <div class="skills-grid">
      <p class="date">2019 - Date</p>
      <p class="place">Obafemi Awolowo University, B.Sc. Computer Engineering</p>
      <p class="date">2012 - 2018</p>
      <p class="place">Federal Science Technical College, Yaba – Lagos</p>
      <p class="date">2010 – 2012</p>
      <p class="place">Tunyo Nursery & Primary school, Lagos</p>
      <p class="date"> 2008 - 2010</p>
      <p class="place">Bright Rainbow International school, Lagos</p>
      </div>
    </section>
    <section class="section">
      <h1 class="section-title">Work</h1>
      <div class="skills-grid">
        <p class="date">06/20 - 12/20</p>
        <div >
          <p class="role">Data Entry Officer</p>
          <p class="place">ClassicMaak Investments Ltd Ikotun– Lagos</p>
        </div>
      </div>
    </section>
  </div>
`;
