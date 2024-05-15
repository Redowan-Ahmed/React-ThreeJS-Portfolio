import { Link } from "react-router-dom";
import { CTA, CTACUS } from "../components";
import { arrow } from "../assets/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const apiServer = process.env.SERVER_ADDRESS
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const headersConf = {
        headers: {
          'decoader772': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader552": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE46aw8789564awda498r6d4ghtdf4h6fy5g4j89gty4j654seADAWAWDa6w4d6aw4d AD6WD6WDAAWDW4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader221": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxAWDAWDAJDjLAWDahwdawdawdawdaAWDAWDAWDawDAWdawdOPEkfopaWJlAWD TE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
        }
      }
      const response = await axios.get(
        `${apiServer}projects/`,
        headersConf
      );
      setProjects(response.data.results);
      setLoading(false);
    };
    loadProjects();
  }, []);
  const loadingData = [1, 2, 3, 4]
  return (
    <section className='max-container select-none'>
      <h1 className='head-text text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-400 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap justify-center my-20 gap-16'>
        {loading ? loadingData.map((value) => (
          <div key={value} className='lg:w-[400px] md:w-2/5 w-full' >
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl animate-pulse`} style={{ background: `linear-gradient(135deg, red -20%, white 120%)` }} />
              <div className='btn-front rounded-xl flex justify-center items-center '>
                <div
                  className='w-1/2 h-1/2 bg-white rounded-md animate-pulse '
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col gap-2'>
              <div className='w-full h-7 bg-gray-800 animate-pulse rounded-md '>
              </div>
              <div className='w-full h-4 bg-gray-800 animate-pulse rounded-md '>
              </div>
              <div className='w-full h-4 bg-gray-800 animate-pulse rounded-md '>
              </div>
              <div className='w-full h-4 bg-gray-800 animate-pulse rounded-md '>
              </div>
              <div className='w-2/4 h-4 bg-gray-800 animate-pulse rounded-md '>
              </div>
              <p className='mt-2 text-slate-400'></p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <div
                  className=' bg-gray-800 w-20 h-4 rounded-md animate-pulse '
                >

                </div>
                <img
                  src={arrow}
                  alt='arrow'
                  loading="lazy"
                  width="25px"
                  height="25px"
                  decoding="async"
                  sizes="(max-width: 25px ) 100vw, 25px"
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        )) : projects.map((project) => (
          <div className='lg:w-[400px] md:w-2/5 w-full' key={project.id}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl`} style={{ background: `linear-gradient(135deg, ${project.color_primary} -20%, ${project.color_secondary} 120%)` }} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.icon}
                  alt='threads'
                  loading="lazy"
                  width="25px"
                  height="25px"
                  decoding="async"
                  sizes="(max-width: 25px ) 100vw, 25px"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold text-white'>
                {project.title}
              </h4>
              <p className='mt-2 text-slate-400'>{project.short_description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-800' />

      <div className="py-20">
          <CTACUS text="Want Your OWN Custom Task Manager For Free?" buttonLink='/tasks' buttonName='Use Free Task Manager' />
      </div>

      <hr className='border-slate-800' />
      <CTA />
    </section>
  );
};

export default Projects;
