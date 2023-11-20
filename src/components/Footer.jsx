import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-800' />

      <div className='footer-container w-full sm:w-full md:w-auto lg:w-auto'>
        <p className="sm:text-center sm:w-full w-full text-center md:w-auto lg:w-auto text-white">
          © 2023 <strong>Redowan Ahmed</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center w-full sm:w-full md:w-auto lg:w-auto'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
