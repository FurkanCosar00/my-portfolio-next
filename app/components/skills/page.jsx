import "/app/components/skills/skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <p>I am striving to never stop learning and improving</p>
      </div>

      <div className="development-cards">
        <div className="dev-item">
          <img src="/images/skills/desktop.png" alt="" />
          <h3>web developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>

        <div className="dev-item">
          <img src="/images/skills/mobile.png" alt="" />
          <h3>web developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>
      </div>

      <div className="programming-languages">
        <div className="language-item">
          <img src="/images/skills/html.png" alt="" />
          <p>HTML</p>
        </div>

        <div className="language-item">
          <img src="/images/skills/css.png" alt="" />
          <p>CSS</p>
        </div>

        <div className="language-item">
          <img src="/images/skills/js.png" alt="" />
          <p>JS</p>
        </div>

        <div className="language-item">
          <img src="/images/skills/react.png" alt="" />
          <p>REACT</p>
        </div>

        <div className="language-item">
          <img src="/images/skills/next.png" alt="" />
          <p>NEXT</p>
        </div>
      </div>
    </div>
  );
}
