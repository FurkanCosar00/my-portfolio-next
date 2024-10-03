import "/app/components/footer/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <ul className='footer-social-links'>
        <li><a target="_blank" href="https://www.instagram.com/luchhass/"><img src="/images/footer/instagram.png" alt="Instagram" /></a></li>
        <li><a target="_blank" href="http://discordapp.com/users/_luchhass"><img src="/images/footer/discord.png" alt="Discord" /></a></li>
        <li><a target="_blank" href="https://github.com/FurkanCosar00"><img src="/images/footer/github.png" alt="GitHub" /></a></li>
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
