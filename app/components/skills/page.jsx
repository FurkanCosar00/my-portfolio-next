import "/app/components/skills/skills.css";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <p>I&apos;am striving to never stop learning and improving</p>
      </div>

      <div className="development-cards">
        <div className="dev-item">
          <Image src="/images/skills/desktop.png" width={32} height={32} alt=""></Image>
          <h3>Web developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>

        <div className="dev-item">
          <Image src="/images/skills/mobile.png" width={32} height={32} alt=""></Image>
          <h3>App developement</h3>
          <p>HTML·CSS·JS·REACT</p>
        </div>
      </div>

      <div className="programming-languages">
        <div className="language-item">
          <Image src="/images/skills/html.png" width={112} height={112} alt=""></Image>
          <p>HTML</p>
        </div>

        <div className="language-item">
          <Image src="/images/skills/css.png" width={112} height={112} alt=""></Image>
          <p>CSS</p>
        </div>

        <div className="language-item">
          <Image src="/images/skills/js.png" width={112} height={112} alt=""></Image>
          <p>JS</p>
        </div>

        <div className="language-item">
          <Image src="/images/skills/react.png" width={112} height={112} alt=""></Image>
          <p>REACT</p>
        </div>

        <div className="language-item">
          <Image src="/images/skills/next.png" width={112} height={112} alt=""></Image>
          <p>NEXT</p>
        </div>
      </div>
    </div>
  );
}
