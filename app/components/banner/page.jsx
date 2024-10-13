import "/app/components/banner/banner.css";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <h1 className="banner-title">developer</h1>

      <div className="developer-info-card">
        <div className="profile-section">
          <Image src="/images/banner/profile-picture.png" width={96} height={96} alt="Profile Picture"></Image>
          <h3>Furkan</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="card-content">
          <ul className="personal-info">
            <li><Image src="/images/banner/mail.png" width={14} height={14} alt="Mail"></Image>furkancosar2005@gmail.com</li>
            <li><Image src="/images/banner/map.png" width={14} height={14} alt="Location"></Image>Turkey</li>
            <li><Image src="/images/banner/brief-case.png" width={14} height={14} alt="Job Type"></Image>Full-time / Freelancer</li>
            <li><Image src="/images/banner/link.png" width={14} height={14} alt="Website"></Image>www.furkancosar.com.tr</li>
          </ul>

          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
            <li>NEXT JS</li>
          </ul>
        </div>

        <Link target="_blank" href="/pdf/furkancosar.pdf" className="banner-cv-button">        
          Download CV
          <Image src="/images/banner/download.png" width={24} height={24} alt="Download Logo"></Image>
        </Link>
      </div>

      <div className="banner-texts">
        <div className="title">
          <span>&lt;h1&gt;</span>
          <h1>Hey<br />I&rsquo;m <span>Furkan</span>,<br />Front-End Developer</h1>
          <span>&lt;/h1&gt;</span>
        </div>

        <div className="paragraph">
          <span>&lt;p&gt;</span>
          <p>I help businesses grow by crafting amazing web experiences. If you&rsquo;re looking for a developer that likes to get stuff done,</p>
          <span>&lt;/p&gt;</span>
        </div>

        <h1 className="lets-talk-text">let&rsquo;s talk <Image src="/images/banner/lets-talk.png" width={40} height={40} alt="Lets Talk" /></h1>
      </div>

      <div className="experiences">
        <div className="exp-item">
          <h2>3</h2>
          <p>Programming Languages</p>
        </div>

        <div className="exp-item">
          <h2>4</h2>
          <p>Development Tools</p>
        </div>

        <div className="exp-item">
          <h2>1</h2>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
}
