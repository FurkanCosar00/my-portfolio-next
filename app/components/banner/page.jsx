import "/app/components/banner/banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <h1 className='banner-title'>developer</h1>

      <div className="developer-info-card">
        <div className="profile-section">
          <img src="/images/banner/profile-picture.png" alt="Profile Picture" />
          <h3>Furkan</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="card-content">
          <ul className="personal-info">
            <li><img src="/images/banner/mail.png" alt="Mail" />furkancosar2005@gmail.com</li>
            <li><img src="/images/banner/map.png" alt="Location" />Turkey</li>
            <li><img src="/images/banner/brief-case.png" alt="Job Type" />Full-time / Freelancer</li>
            <li><img src="/images/banner/link.png" alt="Website" />www.furkancosar.com.tr</li>
          </ul>

          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
            <li>NEXT JS</li>
          </ul>
        </div>

        <button className="banner-cv-button">
          Download CV
          <img src="/images/banner/download.png" alt="Download Logo" />
        </button>
      </div>

      <div className="banner-texts">
        <div className="title">
          <span>&lt;h1&gt;</span>
          <h1>Hey<br />I’m <span>Furkan</span>,<br />Front-End Developer</h1>
          <span>&lt;/h1&gt;</span>
        </div>

        <div className="paragraph">
          <span>&lt;p&gt;</span>
          <p>I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
          <span>&lt;/p&gt;</span>
        </div>

        <h1 className='lets-talk-text'>let’s talk <img src="/images/banner/lets-talk.png" alt="Let's Talk" /></h1>
      </div>

      <div className="experiences">
        <div className="exp-item">
          <h2>4</h2>
          <p>Programming Languages</p>
        </div>

        <div className="exp-item">
          <h2>6</h2>
          <p>Development Tools</p>
        </div>

        <div className="exp-item">
          <h2>8</h2>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
}
