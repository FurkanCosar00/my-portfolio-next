import "/app/components/contactus/contactus.css";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-title">
        <h1>Contact</h1>
        <p>I’m currently available for freelance work</p>
      </div>

      <h1 className="form-title">Send Me A Message</h1>

      <form action="" className="form-group">
        <label className="form-name">
          Your name *
          <input type="text" name='name' placeholder='Enter your name'/>
        </label>

        <label className="form-email">
          Your email *
          <input type="text" name='email' placeholder='Enter your email'/>
        </label>

        <label className="form-message">
          Your message * 
          <input type="text" name='message' placeholder='Enter your needs'/>
        </label>

        <button className="submit-button">Send Message<Image src="/images/contactus/message.png" width={24} height={24} alt=""></Image></button>
      </form>
    </div>
  );
}
