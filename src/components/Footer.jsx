import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const contactItems = [
    {
      icon: "assets/images/icon-location.svg",
      alt: "Location",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      icon: "assets/images/icon-phone.svg",
      alt: "Phone",
      text: "+1-543-123-4567",
    },
    {
      icon: "assets/images/icon-email.svg",
      alt: "Email",
      text: "example@huddle.com",
    },
  ];

  const linksGroup1 = ["About Us", "What We Do", "FAQ"];
  const linksGroup2 = ["Career", "Blog", "Contact Us"];

  const socials = [
    { href: "", icon: <FaFacebookF /> },
    { href: "", icon: <FaTwitter /> },
    { href: "", icon: <FaInstagram /> },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <img src={`assets/images/logo_white.svg`} alt="Logo" className="logo" />

        <div className="flex">
          <ul className="footer_contacts">
            {contactItems.map((item, index) => (
              <li key={index}>
                <img src={item.icon} alt={item.alt} />
                <a>{item.text}</a>
              </li>
            ))}
          </ul>

          {[linksGroup1, linksGroup2].map((group, groupIndex) => (
            <ul key={groupIndex} className="nav">
              {group.map((link, index) => (
                <li key={index}>
                  <a href="">{link}</a>
                </li>
              ))}
            </ul>
          ))}

          <ul className="footer_socials">
            <li>
              {socials.map((social, index) => (
                <a key={index} href={social.href}>
                  {social.icon}
                </a>
              ))}
            </li>
            <li>&copy; Copyright 2018 Huddle. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
