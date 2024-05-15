import { Link } from "react-router-dom";

const CTACUS = ({text, buttonLink, buttonName}) => {
  return (
    <section className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 align-middle items-center'>
      <p className='cta-text '>
          {text}
      </p>
      <Link to={buttonLink} className='btn'>
        {buttonName}
      </Link>
    </section>
  );
};

export default CTACUS;
