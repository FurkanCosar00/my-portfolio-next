import Image from "next/image";
import myprojects from "/app/data/myprojects.json"
import "/app/projects/projects.css";

export default function Projects() {
  return (
    <div className="my-projects">

      <div className="projects">
        {/* 
        {myprojects.reverse().map(x =>
          <div className="projects-item">
            <Image className="thumbnail" src={x.thumbnail} width={342} height={200}></Image>
            <p className="title">{x.title}</p>
            <div className="overlay"></div>
            <div className="button"><a href="#"> siteye git </a></div>
          </div>
        )}
        */}
      </div>
    </div>
  )
}
  