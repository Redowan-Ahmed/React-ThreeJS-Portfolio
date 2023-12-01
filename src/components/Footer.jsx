import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [socialLinks, setsocialLinks] = useState([])
  useEffect(() => {
    const loadSocialLinks = async () => {
      setLoading(true);

      const headersConf = {
        headers: {
          'decoader772': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader552": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE46aw8789564awda498r6d4ghtdf4h6fy5g4j89gty4j654seADAWAWDa6w4d6aw4d AD6WD6WDAAWDW4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader221": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxAWDAWDAJDjLAWDahwdawdawdawdaAWDAWDAWDawDAWdawdOPEkfopaWJlAWD TE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
        }
      }
      const response = await axios.get(
        "https://redowan.voxnetconsulting.co.uk/social-medias/",
        headersConf
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
                  loading="lazy"
                  width="30px"
                  height="30px"
                  decoding="async"
                  sizes="(max-width: 30px ) 100vw, 30px"
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
