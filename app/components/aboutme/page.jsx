import "/app/components/aboutme/aboutme.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about-me-title">About Me</h1>

      <div className="about-me-paragraph">
          <span>&lt;p&gt;</span>  
          <h2>Hello! </h2>
            
          <p>
            My name is Furkan and I
            specialize in web developement
            that utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>,
            and <span>REACT</span> etc. <br /><br />
  
            I am a highly motivated
            individual and eternal
            optimist dedicated to writing
            clear, concise, robust code
            that works. Striving to never
            stop learning and improving. <br /><br />
  
            When I'm not coding, I am
            <span>playing games</span>, reading, or
            picking up some new hands-on
            art project like <span>photography</span> <br /><br />
  
            I like to have my perspective
            and belief systems challenged
            so that I see the world
            through new eyes.
          </p>
          <span>&lt;/p&gt;</span>
      </div>
    </div>
  );
}
