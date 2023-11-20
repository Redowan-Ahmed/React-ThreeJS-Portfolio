import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { Hi } from "../assets/images";

const HomeInfo = ({ currentStage }) => {
  const redowanStr = 'Redowan'
  const ahmed = 'Ahmed'

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-5 px-8 text-white mx-5'>
        <span className="flex justify-center items-center h-4">
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>{redowanStr.split('').map((letter,index)=>(
          <span key={index} className="hover:-mt-2 hover:text-2xl transition-all cursor-pointer duration-500 hover:duration-100 click:goodbyeLetterAnim">{letter}</span>
        ))} {ahmed.split('').map((letter, index)=>(
          <span key={index} className="hover:-mt-2 hover:text-2xl transition-all cursor-pointer duration-500 hover:duration-100 click:goodbyeLetterAnim">{letter}</span>
        ))}</span>
          <img src={Hi} className="w-5 h-auto lg:w-6 sm:w-2" alt="Hi By Redowan" />
        </span>
        <br />
        A Full Stack Web Developer from Bangladesh 🇧🇩
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
