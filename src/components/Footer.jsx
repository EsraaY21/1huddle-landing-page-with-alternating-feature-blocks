import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-customDark pt-36 pb-16">
      <div className="container">
        import Logo from "./svg/Logo";
        <div className="text-white flex lg:flex-row flex-col justify-between mt-8 text-[0.875rem] leading-[1.5rem]">
          <ul className="space-y-4 lg:w-[30%]">
            <li className="mb-4 flex gap-4">
              <img
                src={`/images/icon-location.svg`}
                className="w-6 h-6 object-contain"
              />
              <a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </a>
            </li>
            <li className="mb-4 flex gap-4">
              <img
                src={`/images/icon-phone.svg`}
                className="w-6 h-6 object-contain"
              />
              <a>+1-543-123-4567</a>
            </li>
            <li className="flex gap-4">
              <img
                src={`/images/icon-email.svg`}
                className="w-6 h-6 object-contain"
              />
              <a>example@huddle.com</a>
            </li>
          </ul>

          <ul className="space-y-3">
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

          <ul className="space-y-3">
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

          <ul className="flex flex-col justify-between">
            <li className="flex gap-3 socials">
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
