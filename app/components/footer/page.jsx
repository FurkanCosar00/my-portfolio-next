import "/app/components/footer/footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className='footer-social-links'>
        <li><a target="_blank" href="https://www.instagram.com/luchhass/"><Image src="/images/footer/instagram.png" width={32} height={32} alt="Instagram"></Image></a></li>
        <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><Image src="/images/footer/discord.png" width={32} height={32} alt="Discord"></Image></a></li>
        <li><a target="_blank" href="https://github.com/FurkanCosar00"><Image src="/images/footer/github.png" width={32} height={32} alt="GitHub"></Image></a></li>
      </ul>

      <ul className='footer-texts'>
        <li className="copyright">© 2023 SinanTokmak. All rights reserved.</li>
        <li className="privacy">Privacy Policy</li>
        <li className="terms">Terms & Conditions</li>
      </ul>

      <p className="footer-credits">Design By <span>JohannLeon</span></p>
    </footer>
  );
}
