import { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './App.css';

const EMAILJS_SERVICE_ID = 'service_2vmuo2b';
const EMAILJS_TEMPLATE_ID = 'template_daoxqij';
const EMAILJS_PUBLIC_KEY = 'nnbFTmxthB-gDHIk3';

init(EMAILJS_PUBLIC_KEY);

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone,
      message,
      to_email: 'v12hnu555@gmail.com',
    };

    send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        setStatusMessage('Message sent successfully! Check your email.');
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setStatusMessage('Unable to send message right now. Please try again later.');
      });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <nav className="site-nav">
        <div className="nav-brand">VB</div>
        <button
          type="button"
          className={`mobile-nav-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <button type="button" onClick={() => scrollToSection('home')}>Home</button>
          <button type="button" onClick={() => scrollToSection('about')}>About</button>
          <button type="button" onClick={() => scrollToSection('skills')}>Skills</button>
          <button type="button" onClick={() => scrollToSection('projects')}>Project</button>
          <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-intro">Hello it’s Me</p>
              <h1>Vishnu Bohara</h1>
              <p className="hero-title">
                And I’m a <span>UI / UX DESIGNER</span>
              </p>
              <p className="hero-text">
                I’m a beginner UI/UX designer who loves creating clean and
                user-friendly interfaces. Currently building my skills through real
                projects and excited to grow in the design industry.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="/cv.pdf" download>
                  Download CV
                </a>
              </div>
              <div className="social-links">
                <a
                  className="social-icon social-linkedin"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 6.5c0 1.07-.86 1.94-1.92 1.94A1.93 1.93 0 0 1 3.1 6.5c0-1.08.86-1.95 1.92-1.95 1.06 0 1.92.87 1.92 1.95zm.1 4.57H3.1v10.9h3.95V11.06zm7.04 0h-3.95v10.9h3.95v-6.05c0-3.3 4.44-3.57 4.44 0v6.05h3.95v-7.55c0-6.01-6.49-5.79-8.39-2.82V11.06z" />
                </svg>
              </a>
              <a
                className="social-icon social-instagram"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.92a3.12 3.12 0 1 1 0-6.24 3.12 3.12 0 0 1 0 6.24z" />
                  <circle cx="17.7" cy="6.3" r="1.2" />
                  <path d="M16.68 2H7.32A5.32 5.32 0 0 0 2 7.32v9.36A5.32 5.32 0 0 0 7.32 22h9.36A5.32 5.32 0 0 0 22 16.68V7.32A5.32 5.32 0 0 0 16.68 2zm3.15 14.68a3.15 3.15 0 0 1-3.15 3.15H7.32a3.15 3.15 0 0 1-3.15-3.15V7.32a3.15 3.15 0 0 1 3.15-3.15h9.36a3.15 3.15 0 0 1 3.15 3.15v9.36z" />
                </svg>
              </a>
              <a
                className="social-icon social-facebook"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.12 8.5h1.98V4.98h-2.56c-2.21 0-3.64 1.43-3.64 3.62v1.35H8.8v2.48h2.1V20h2.55v-7.07h2.4l.38-2.48h-2.78V9.98c0-.72.19-1.22 1.2-1.22z" />
                </svg>
              </a>
              <a
                className="social-icon social-tiktok"
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.2 8.3c-.2-.1-.4-.1-.5-.1-.2 0-.4 0-.5.1v5.2c0 1.7-1.3 3-3 3a3.04 3.04 0 0 1-3-3 3.04 3.04 0 0 1 3-3c.2 0 .4 0 .5.1V9.8c-.4-.2-.8-.3-1.3-.3-2.1 0-3.8 1.7-3.8 3.8S8.6 17.1 10.7 17.1s3.8-1.7 3.8-3.8V9.6c.8.5 1.8.9 2.8 1.1.1-.4.1-.9.1-1.3-.1-.1-.4-.4-.7-.6a4.95 4.95 0 0 1-2.4-.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-personal">
            <div className="hero-photo-ring">
              <img src="/imgportfolio.png" alt="Vishnu Bohara portrait" />
            </div>
          </div>
        </div>
      </section>

        <section id="about" className="section-panel about-panel">
          <div className="about-grid">
            <div className="about-visual about-profile">
              <div className="about-photo-ring about-photo-circle">
                <img
                  className="about-photo-circle-img"
                  src="/aboutme.png"
                  alt="Vishnu Bohara"
                />
              </div>
            </div>
            <div className="about-copy">
              <h2>
                About <span>Me</span>
              </h2>
              <p className="about-subtitle">UI / UX Designer</p>
              <p>
                I'm a beginner UI/UX designer certified by Broadway Infosys,
                passionate about creating clean and user-friendly designs. I have
                completed two projects, including a Daraz app redesign and a
                fitness app, focusing on improving user experience and
                simplicity.
              </p>
              <p>
                I'm eager to learn, grow, and gain real-world experience
                through an internship opportunity.
              </p>
              <button
                type="button"
                className="button primary about-button"
                onClick={() => scrollToSection('skills')}
              >
                See My Skills
              </button>
            </div>
          </div>
        </section>

        <section id="skills" className="section-panel skills-panel">
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            I use these tools and approaches to craft thoughtful, usable, and
            attractive digital experiences.
          </p>
          <div className="skills-grid">
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="skill-icon">🎨</span>
                <strong>UI Design</strong>
              </div>
              <p>Figma, wireframes, visual systems, responsive layouts.</p>
              <div className="skill-meter">
                <div className="skill-meter-fill" style={{ width: '92%' }} />
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="skill-icon">🧠</span>
                <strong>UX Research</strong>
              </div>
              <p>User flows, personas, usability testing, competitor analysis.</p>
              <div className="skill-meter">
                <div className="skill-meter-fill" style={{ width: '85%' }} />
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="skill-icon">⚡</span>
                <strong>Interaction Design</strong>
              </div>
              <p>Prototyping, animations, micro-interactions, accessibility.</p>
              <div className="skill-meter">
                <div className="skill-meter-fill" style={{ width: '88%' }} />
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="skill-icon">🤝</span>
                <strong>Collaboration</strong>
              </div>
              <p>Design handoff, team communication, client feedback, iteration.</p>
              <div className="skill-meter">
                <div className="skill-meter-fill" style={{ width: '90%' }} />
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="skill-icon">🖌️</span>
                <strong>Graphic Design</strong>
              </div>
              <p>Beginner Canva workflows, branding visuals, layout balance, color theory.</p>
              <div className="skill-meter">
                <div className="skill-meter-fill" style={{ width: '72%' }} />
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section-panel projects-panel">
          <h2>
            Our <span>Projects</span>
          </h2>
          <div className="projects-grid">
            <article className="project-card project-fitstart">
              <div className="project-card-image">
                <div className="project-card-logo">FitStart</div>
              </div>
              <div className="project-card-footer">
                <p>Fitness (FitStart)</p>
              </div>
            </article>
            <article className="project-card project-daraz">
              <div className="project-card-image">
                <div className="project-card-logo">Daraz</div>
              </div>
              <div className="project-card-footer">
                <p>Daraz (Re-Design)</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section-panel contact-panel">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p className="contact-subtitle">
            Want to work together? Send a message and I'll get back to you soon.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="field-grid">
              <input
                type="tel"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button className="button primary contact-button" type="submit">
              Send Message
            </button>
            {statusMessage && <p className="contact-status">{statusMessage}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
