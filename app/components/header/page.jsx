import Link from "next/link";
import "/app/components/header/header.css"

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-logo"><span> &lt;C/&gt; </span>FurkanCosar</h1>

      <ul className="navigation">
        <li className="nav-item"><Link href="/">Home</Link></li>
        <li className="nav-item"><Link href="/projects">Projects</Link></li>
      </ul>
    </header>
  );
}
