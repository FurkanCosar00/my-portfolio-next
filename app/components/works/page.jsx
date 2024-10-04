import "/app/components/works/works.css";
import Link from "next/link";
import Image from "next/image";

export default function Works() {
  return (
    <div className="works">
      <div className="works-title">
        <h1>Works</h1>
        <p>I had the pleasure of working with these awesome projects</p>
      </div>

      <div className="works-link">
        <Link href={"/projects"}>View Projects</Link>
        <Image src="/images/works/cursor.png" width={24} height={24} alt=""></Image>
      </div>
    </div>
  );
}
