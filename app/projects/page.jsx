import Image from "next/image";
import myprojects from "/app/data/myprojects.json"
import "/app/projects/projects.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="my-projects">

      <div className="projects">
        {myprojects.reverse().map((x, i)=>
          <div className="projects-item" key={i}>
            <Image className="thumbnail" src={x.thumbnail} width={342} height={200}></Image>
            <p className="title">{x.title}</p>
            <div className="overlay"></div>
            <div className="button"><Link target="_blank" href={x.link}>siteye git</Link></div>
          </div>
        )}
      </div>
    </div>
  )
}