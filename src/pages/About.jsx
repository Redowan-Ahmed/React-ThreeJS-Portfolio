import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, CTACUS } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";

import "react-vertical-timeline-component/style.min.css";
import { Hi } from "../assets/images";

const About = () => {
  const apiServer = process.env.SERVER_ADDRESS
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducation] = useState([])
  useEffect(() => {
    const loadSkills = async () => {
      setLoading(true);
      const headersConf = {
        headers: {
          'decoader772': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader552": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE46aw8789564awda498r6d4ghtdf4h6fy5g4j89gty4j654seADAWAWDa6w4d6aw4d AD6WD6WDAAWDW4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader221": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxAWDAWDAJDjLAWDahwdawdawdawdaAWDAWDAWDawDAWdawdOPEkfopaWJlAWD TE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
        }
      }
      const response = await axios.get(
        `${apiServer}skills/`,
        headersConf
      );
      setSkills(response.data.results);

      const experience = await axios.get(
        `${apiServer}work-experainces/`,
        headersConf
      );
      setExperiences(experience.data.results)

      const education = await axios.get(
        `${apiServer}educational-qualifications/`,
        headersConf
      );
      setEducation(education.data.results)

      setLoading(false);
    };
    loadSkills();
  }, []);
  const loadingData = [1, 2, 3, 4, 5, 6, 7]
  console.log(skills);
  return (
    <section className='max-container select-none'>
      <h1 className='head-text text-white flex flex-wrap gap-3 items-center '>
        Hello, I'm
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Redowan Ahmed
        </span>
        <img src={Hi} className="w-8 h-auto lg:w-16 sm:w-16" alt="Hi By Redowan" />
      </h1>

      <div className='mt-5 flex flex-col gap-2 text-gray-100'>
        <p>
          A Full Stack Software Engineer based in Bangladesh 🇧🇩, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-white'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {loading ?
            loadingData.map((value) => (
              <div key={value} className='block-container lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-[4.7rem] sm:h-[4.7rem] w-[4.7rem] h-[4.7rem] animate-pulse'>
                <div className='btn-back rounded-xl bg-blue-950' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                </div>
              </div>
            )) : skills.map((skill) => (
              <div className='block-container lg:w-20 lg:h-20 sm:w-[4.7rem] sm:h-[4.7rem] w-[4.7rem] h-[4.7rem]' key={skill.name}>
                <div className='btn-back rounded-xl bg-blue-950 animate-pulse' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    loading="lazy"
                    width="40px"
                    height="40px"
                    decoding="async"
                    sizes="(max-width: 40px ) 100vw, 40px"
                    className='w-1/2 h-1/2 object-contain rounded-md'
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text text-white'>Work Experiences.</h3>
        <div className='mt-5 flex flex-col gap-3 text-gray-50'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          {
            loading ?
              (
                <div className="w-full bg-slate-800 h-96 rounded-md animate-pulse">

                </div>
              ) : (
                <VerticalTimeline>
                  {experiences.map((experience) => (
                    <VerticalTimelineElement
                      key={experiences.id}
                      date={`${experience.start_date} - ${experience.present ? 'Present' : experience.end_date}`}
                      iconStyle={{ background: experience.strock_color }}
                      icon={
                        <div className='flex justify-center items-center w-full h-full'>
                          <img
                            src={experience.logo}
                            alt={experience.company_name}
                            loading="lazy"
                            width="40px"
                            height="40px"
                            decoding="async"
                            sizes="(max-width: 40px ) 100vw, 40px"
                            className='w-[60%] h-[60%] object-contain rounded-md'
                          />
                        </div>
                      }
                      contentStyle={{
                        borderBottom: "8px",
                        borderStyle: "solid",
                        borderBottomColor: experience.strock_color,
                        boxShadow: "none",
                      }}
                    >
                      <div>
                        <h3 className='text-black text-xl font-poppins font-semibold'>
                          {experience.position}
                        </h3>
                        <p
                          className='text-black-500 font-medium text-base'
                          style={{ margin: 0 }}
                        >
                          {experience.company_name}
                        </p>
                      </div>

                      <div className='description' dangerouslySetInnerHTML={{ __html: experience.description }} />
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              )
          }
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-white'>Educational Qualifications.</h3>
        <div className='mt-5 flex flex-col gap-3 text-gray-50'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          {
            loading ?
              (
                <div className="w-full bg-slate-800 h-96 rounded-md animate-pulse">

                </div>
              ) : (
                <VerticalTimeline>
                  {educations.map((education) => (
                    <VerticalTimelineElement
                      key={education.id}
                      date={`${education.start_date} - ${education.present ? 'Present' : education.end_date}`}
                      iconStyle={{ background: education.strock_color }}
                      icon={
                        <div className='flex justify-center items-center w-full h-full'>
                          <img
                            src={education.logo}
                            alt={education.institute_name}
                            loading="lazy"
                            width="40px"
                            height="40px"
                            decoding="async"
                            sizes="(max-width: 40px ) 100vw, 40px"
                            className='w-[60%] h-[60%] object-contain rounded-md'
                          />
                        </div>
                      }
                      contentStyle={{
                        borderBottom: "8px",
                        borderStyle: "solid",
                        borderBottomColor: education.strock_color,
                        boxShadow: "none",
                      }}
                    >
                      <div>
                        <h3 className='text-black text-xl font-poppins font-semibold'>
                          {education.grade}
                        </h3>
                        <p
                          className='text-black-500 font-medium text-base'
                          style={{ margin: 0 }}
                        >
                          {education.institute_name}
                        </p>
                      </div>

                      <div className='description' dangerouslySetInnerHTML={{ __html: education.description }} />
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              )
          }
        </div>
      </div>

      <hr className='border-slate-800' />
      <div className="py-20">
          <CTACUS text="All Certificates" buttonLink='/certificates' buttonName='View Certificates' />
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

export default About;
