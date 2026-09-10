import { useEffect } from "react";

const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

function App() {
  // Cat paw animation when clicking anywhere
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--paw-cursor",
      `url("${publicAsset("paw-cursor.png")}") 8 8`
    );
    document.documentElement.style.setProperty(
      "--paw-cursor-image",
      `url("${publicAsset("paw-cursor.png")}")`
    );

    const handleClick = (event) => {
      const paw = document.createElement("span");

      paw.className = "click-paw";
      paw.style.left = `${event.clientX}px`;
      paw.style.top = `${event.clientY}px`;

      document.body.appendChild(paw);

      setTimeout(() => {
        paw.remove();
      }, 800);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* =========================================
          MINIMAL BACKGROUND DECORATIONS
          ========================================= */}

      <div className="page-decoration page-paw paw-bg-1">
        🐾
      </div>

      <div className="page-decoration page-paw paw-bg-2">
        🐾
      </div>

      <div className="leaf-decoration leaf-decoration-1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="leaf-decoration leaf-decoration-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="pink-blob blob-bg-1"></div>
      <div className="pink-blob blob-bg-2"></div>

      {/* =========================================
          NAVBAR
          ========================================= */}

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">

          <a className="navbar-brand" href="#home">
            Rashmi<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      {/* =========================================
          HERO SECTION
          ========================================= */}

      <section id="home" className="hero-section">

        <div className="hero-decoration decoration-one"></div>
        <div className="hero-decoration decoration-two"></div>
        <div className="hero-decoration decoration-three"></div>

        <div className="container hero-container">

          <div className="row align-items-center min-vh-100">

            {/* HERO TEXT */}

            <div className="col-lg-7">

              <div className="hero-content">

                <div className="hero-intro">
                  <span className="intro-line"></span>
                  <span>Hello, I'm</span>
                </div>

                <h1 className="hero-title">
                  RASHMI
                  <br />
                  <span>NEGI</span>
                </h1>

                <div className="hero-role-wrapper">

                  <span className="hero-role-dot"></span>

                  <h2 className="hero-role">
                    Aspiring MERN Stack Developer
                  </h2>

                </div>

                <p className="hero-description">
                  I'm passionate about building modern, responsive and
                  user-friendly web applications using the MERN stack. I enjoy
                  turning ideas into clean and meaningful digital experiences.
                </p>

                {/* MCA HIGHLIGHT */}

                <div className="mca-highlight">

                  <div className="mca-icon">
                    <i className="bi bi-mortarboard-fill"></i>
                  </div>

                  <div>

                    <span>Currently pursuing</span>

                    <strong>
                      MCA at Graphic Era Deemed to be University
                    </strong>

                  </div>

                </div>

                {/* HERO BUTTONS */}

                <div className="hero-buttons">

                  <a
                    href="#projects"
                    className="btn btn-primary-custom"
                  >
                    View My Projects
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>

                  <a
                    href="#contact"
                    className="btn btn-outline-custom"
                  >
                    Contact Me
                  </a>

                  <a
                    href={publicAsset("resume.pdf")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-custom"
                  >
                    <i className="bi bi-file-earmark-person me-2"></i>
                    View Resume
                  </a>

                </div>

                {/* HERO SOCIALS */}

                <div className="hero-bottom">

                  <div className="social-links">

                    <a
                      href="https://linkedin.com/in/rashmi-negi-1751932b8"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                      href="https://github.com/Rashmi-Negi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </a>

                    <a
                      href="mailto:rashminegi248@gmail.com"
                      aria-label="Email"
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </a>

                  </div>

                  <span className="hero-scroll">
                    Scroll to explore
                    <i className="bi bi-arrow-down"></i>
                  </span>

                </div>

              </div>

            </div>

            {/* HERO PROFILE */}

            <div className="col-lg-5 text-center mt-5 mt-lg-0">

              <div className="hero-profile-wrapper">

                <div className="tech-badge badge-react">
                  <i className="bi bi-braces"></i>
                  React
                </div>

                <div className="tech-badge badge-node">
                  <i className="bi bi-server"></i>
                  Node.js
                </div>

                <div className="tech-badge badge-mongo">
                  <i className="bi bi-database"></i>
                  MongoDB
                </div>

                <div className="tech-badge badge-express">
                  <i className="bi bi-lightning-charge-fill"></i>
                  Express
                </div>

                <div className="profile-card">

                  <div className="profile-glow"></div>

                  <img
                    src={publicAsset("profile.jpg")}
                    alt="Rashmi Negi"
                    className="profile-image"
                  />

                  <div className="profile-caption">

                    <span>Developer</span>

                    <strong>
                      Building with MERN
                    </strong>

                  </div>

                </div>

                <div className="floating-badge badge-one">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div className="floating-badge badge-two">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <div className="floating-paw paw-one">
                  🐾
                </div>

                <div className="floating-paw paw-two">
                  🐾
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          ABOUT SECTION
          ========================================= */}

      <section id="about" className="section-padding">

        <div className="container">

          <div className="section-heading">
            <p>Get to know me</p>
            <h2>About Me</h2>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <div className="glass-card text-center">

                <div className="about-icon">
                  <i className="bi bi-person-heart"></i>
                </div>

                <p>
                  I am an aspiring MERN Stack Developer currently pursuing my
                  MCA at Graphic Era Deemed to be University.
                </p>

                <p>
                  I have a strong foundation in frontend and backend development
                  and enjoy creating scalable, responsive and user-centric web
                  applications.
                </p>

                <p className="mb-0">
                  I am always interested in learning new technologies,
                  improving my development skills and creating meaningful
                  digital experiences.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          SKILLS SECTION
          ========================================= */}

      <section id="skills" className="section-padding soft-section">

        <div className="container">

          <div className="section-heading">
            <p>What I work with</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-window"></i>

                <h4>Frontend</h4>

                <p>
                  HTML5, CSS, JavaScript, React.js, Bootstrap
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-server"></i>

                <h4>Backend</h4>

                <p>
                  Node.js, Express.js, MongoDB
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-code-square"></i>

                <h4>Programming</h4>

                <p>
                  C, C++, Java, SQL
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-tools"></i>

                <h4>Tools</h4>

                <p>
                  VS Code, MS Excel, MS Word, MS PowerPoint, MS Access
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-people"></i>

                <h4>Soft Skills</h4>

                <p>
                  Communication, Teamwork, Adaptability, Creativity
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">

                <i className="bi bi-stars"></i>

                <h4>Strengths</h4>

                <p>
                  Attention to Detail, Punctuality, Active Listening
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          EDUCATION SECTION
          ========================================= */}

      <section id="education" className="section-padding">

        <div className="container">

          <div className="section-heading">
            <p>My academic journey</p>
            <h2>Education</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span>Currently Pursuing</span>

                <h3>
                  Master of Computer Applications (MCA)
                </h3>

                <h5>
                  Graphic Era Deemed to be University
                </h5>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span>Aug 2022 – Aug 2025</span>

                <h3>
                  Bachelor of Science in Information Technology
                </h3>

                <h5>
                  BSc. IT — ITM, Dehradun
                </h5>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span>2022</span>

                <h3>
                  Class 12 — CBSE Board
                </h3>

                <h5>
                  Kendriya Vidyalaya, Joshimath
                </h5>

                <strong>80%</strong>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span>2020</span>

                <h3>
                  Class 10 — CBSE Board
                </h3>

                <h5>
                  Kendriya Vidyalaya, Joshimath
                </h5>

                <strong>82%</strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          PROJECTS SECTION
          ========================================= */}

      <section id="projects" className="section-padding soft-section">

        <div className="container">

          <div className="section-heading">
            <p>Things I've built</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="row g-4">

            {/* TRAVEL SPHERE */}

            <div className="col-lg-6">

              <div className="project-card project-travel">

                <div className="project-top">

                  <div className="project-icon">
                    <i className="bi bi-airplane"></i>
                  </div>

                  <span className="project-status available">
                    MERN Project
                  </span>

                </div>

                <div className="project-number">
                  01
                </div>

                <h3>
                  Travel Sphere
                </h3>

                <p className="project-description">
                  A full-stack MERN travel booking platform for seamless bus
                  and train ticket reservations.
                </p>

                <div className="project-features">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Interactive ticket search
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Seat selection and booking
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Secure authentication
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Dynamic booking dashboard
                  </div>

                </div>

                <div className="tech-tags">

                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Bootstrap</span>

                </div>

              </div>

            </div>

            {/* RED RESCUE */}

            <div className="col-lg-6">

              <div className="project-card project-redrescue">

                <div className="project-top">

                  <div className="project-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>

                  <span className="project-status available">
                    Active Project
                  </span>

                </div>

                <div className="project-number">
                  02
                </div>

                <h3>
                  RedRescue
                </h3>

                <p className="project-description">
                  A MERN stack blood donation platform designed to connect
                  donors, hospitals and blood banks.
                </p>

                <div className="project-features">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Hospital search by state and district
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Donor registration
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Blood drive availability
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Admin control panels
                  </div>

                </div>

                <div className="tech-tags">

                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>React.js</span>
                  <span>Node.js</span>

                </div>

                <a
                  href="https://github.com/Rashmi-Negi/RedRescue"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project on GitHub
                  <i className="bi bi-arrow-up-right"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          CONTACT SECTION
          ========================================= */}

      <section id="contact" className="section-padding">

        <div className="container">

          <div className="section-heading">
            <p>Let's connect</p>
            <h2>Contact Me</h2>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="contact-card">

                {/* EMAIL */}

                <div className="contact-item">

                  <i className="bi bi-envelope-fill"></i>

                  <div>

                    <h5>Email</h5>

                    <a href="mailto:rashminegi248@gmail.com">
                      rashminegi248@gmail.com
                    </a>

                  </div>

                </div>

                {/* PHONE */}

                <div className="contact-item">

                  <i className="bi bi-telephone-fill"></i>

                  <div>

                    <h5>Phone</h5>

                    <a href="tel:+919528904991">
                      +91 9528904991
                    </a>

                  </div>

                </div>

                {/* LINKEDIN */}

                <div className="contact-item">

                  <i className="bi bi-linkedin"></i>

                  <div>

                    <h5>LinkedIn</h5>

                    <a
                      href="https://linkedin.com/in/rashmi-negi-1751932b8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>

                  </div>

                </div>

                {/* GITHUB */}

                <div className="contact-item">

                  <i className="bi bi-github"></i>

                  <div>

                    <h5>GitHub</h5>

                    <a
                      href="https://github.com/Rashmi-Negi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Rashmi-Negi
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER
          ========================================= */}

      <footer className="footer">

        <div className="container text-center">

          <p>
            © {new Date().getFullYear()} Rashmi Negi. All Rights Reserved.
          </p>

        </div>

      </footer>

    </>
  );
}

export default App;