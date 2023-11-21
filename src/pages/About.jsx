import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";

import "react-vertical-timeline-component/style.min.css";
import { Hi } from "../assets/images";
const About = () => {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    const loadSkills = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://redowan.voxnetconsulting.co.uk/skills/"
      );
      setSkills(response.data);

      const experience = await axios.get(
        'https://redowan.voxnetconsulting.co.uk/work-experainces/'
      );
      setExperiences(experience.data)

      setLoading(false);
    };
    loadSkills();
  }, []);
  const loadingData = [1, 2, 3, 4, 5, 6, 7]
  return (
    <section className='max-container'>
      <h1 className='head-text text-white flex flex-wrap gap-3 items-center '>
        Hello, I'm
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Redowan Ahmed
        </span>
        <img src={Hi} className="w-8 h-auto lg:w-16 sm:w-16" alt="Hi By Redowan" />
      </h1>

      <div className='mt-5 flex flex-col gap-2 text-gray-100'>
        <p>
          A Full Stack Web Developer based in Bangladesh 🇧🇩, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-white'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {loading ?
            loadingData.map((value) => (
              <div key={value} className='block-container lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-16 sm:h-16 w-16 h-16 animate-pulse'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                </div>
              </div>
            )) : skills.map((skill) => (
              <div className='block-container lg:w-20 lg:h-20 sm:w-16 sm:h-16 w-16 h-16' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text text-white'>Work Experience.</h3>
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
                            className='w-[60%] h-[60%] object-contain'
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
                          {experience.company_name}
                        </h3>
                        <p
                          className='text-black-500 font-medium text-base'
                          style={{ margin: 0 }}
                        >
                          {experience.company_name}
                        </p>
                      </div>

                      <div className='my-5 list-disc ml-5 space-y-2' dangerouslySetInnerHTML={{ __html: experience.description }} />
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              )
          }
        </div>
      </div>

      <hr className='border-slate-800' />

      <CTA />
    </section>
  );
};

export default About;
