"use client"
import "/app/components/header/header.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Header() {
  const Pathname = usePathname();

  return (
    <header className="header">
      <div className="navbar">
        <h1 className="header-logo"><span> &lt;C/&gt; </span>FurkanCosar</h1>

        <ul className="navigation">
          <li className={Pathname === "/" ? "active-link nav-item" : "nav-item"}>
            <Link href="/">Home</Link>
          </li>

          <li className={Pathname === "/projects" ? "active-link nav-item" : "nav-item"}>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>

        <ul className="header-social-links">
          <li><a target="_blank" href="https://www.instagram.com/luchhass/"><Image src="/images/header/instagram.png" width={20} height={20} alt="Instagram"></Image></a></li>
          <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><Image src="/images/header/discord.png" width={20} height={20} alt="Discord"></Image></a></li>
          <li><a target="_blank" href="https://github.com/FurkanCosar00"><Image src="/images/header/github.png" width={20} height={20} alt="GitHub"></Image></a></li>
        </ul>
      </div>
    </header>
  );
}
