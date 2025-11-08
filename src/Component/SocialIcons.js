import { useEffect } from "react";
import { FaLinkedin, FaGoogle, FaInstagram, FaGithub } from "react-icons/fa";

export default function SocialIcons({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const socials = [
    { icon: <FaLinkedin />, link: "https://linkedin.com", colorClass: "linkedin" },
    { icon: <FaGoogle />, link: "https://google.com", colorClass: "google" },
    { icon: <FaInstagram />, link: "https://instagram.com", colorClass: "instagram" },
    { icon: <FaGithub />, link: "https://github.com", colorClass: "github" },
  ];

  return (
    <ul className="social flex md:pt-14 pb-6 justify-center items-center h-full">
      {socials.map((social, idx) => (
        <li key={idx} className="social-item">
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link ${social.colorClass}`}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
