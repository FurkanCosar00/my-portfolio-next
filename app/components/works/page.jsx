import Link from "next/link";
import "/app/components/works/works.css";

export default function Works() {
  return (
    <div className="works">
      <div className="works-title">
        <h1>Works</h1>
        <p>I had the pleasure of working with these awesome projects</p>
      </div>

      <div className="works-link">
        <Link href={"/projects"}>View Projects</Link>
        <img src="/images/works/cursor.png" alt="" />
      </div>
    </div>
  );
}
