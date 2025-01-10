import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-location">
            <li>
              <img src={`assets/images/icon-location.svg`} alt="Location" />
              <a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </a>
            </li>
            <li>
              <img src={`assets/images/icon-phone.svg`} alt="Phone" />
              <a>+1-543-123-4567</a>
            </li>
            <li>
              <img src={`assets/images/icon-email.svg`} alt="Email" />
              <a>example@huddle.com</a>
            </li>
          </ul>

          <ul className="footer-links">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">What We Do</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>

          <ul className="footer-links">
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>

          <ul className="footer-socials">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>&copy; Copyright 2018 Huddle. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
