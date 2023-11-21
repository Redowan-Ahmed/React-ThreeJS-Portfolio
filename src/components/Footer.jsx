import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [socialLinks, setsocialLinks] = useState([])
  useEffect(() => {
    const loadSocialLinks = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:8000/api/social-medias/"
      );
      setsocialLinks(response.data);
      setLoading(false);
    };
    loadSocialLinks();
  }, []);
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-800' />

      <div className='footer-container w-full sm:w-full md:w-auto lg:w-auto'>
        <p className="sm:text-center sm:w-full w-full text-center md:w-auto lg:w-auto text-white">
          © 2023 <strong>Redowan Ahmed</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center w-full sm:w-full md:w-auto lg:w-auto'>

          {loading ? (
            <>
              <div className='w-6 h-6 rounded-md bg-slate-800 animate-pulse'>
              </div>
              <div className='w-6 h-6 rounded-md bg-slate-800 animate-pulse'>
              </div>
              <div className='w-6 h-6 rounded-md bg-slate-800 animate-pulse'>
              </div>
              <div className='w-6 h-6 rounded-md bg-slate-800 animate-pulse'>
              </div>
            </>
          ) :
            socialLinks.map((link) => (
              <Link key={link.name} to={link.url} target='_blank'>
                <img
                  src={link.icon}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                  title={link.name}
                />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
