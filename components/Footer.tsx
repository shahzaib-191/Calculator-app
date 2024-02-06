import { FaYoutube } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className={`w-full text-center space-y-2 `}>
      <ul className="flex items-center justify-center text-2xl gap-3 p-5">
        <li>
          <Link
            href={"https://twitter.com/RajpootShaiby"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <BsTwitter />
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.linkedin.com/in/shahzaib-rajpoot-78a042252/"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <BsLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.freecodecamp.org/"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <FaYoutube />
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/shahzaib-191"}
            target="_blank"
            className="border border-transparent hover:border-white"
          >
            <BsGithub />
          </Link>
        </li>
      </ul>

      <p className="py-2">
        Designed and developed by <strong> M . S h a h z a i b  </strong>    (Shahid)
      </p>
    </footer>
  );
}

export default Footer;
