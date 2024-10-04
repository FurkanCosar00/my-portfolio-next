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

      <ul className='header-social-links'>
        <li><a target="_blank" href="https://www.instagram.com/luchhass/"><img src="/images/header/instagram.png" alt="Instagram" /></a></li>
        <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><img src="/images/header/discord.png" alt="Discord" /></a></li>
        <li><a target="_blank" href="https://github.com/FurkanCosar00"><img src="/images/header/github.png" alt="GitHub" /></a></li>
      </ul>
    </header>
  );
}
