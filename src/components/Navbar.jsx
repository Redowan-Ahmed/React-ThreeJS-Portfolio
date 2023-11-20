import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header '>
      <NavLink to='/'>
      <div className="w-32 h-12 shadow-md flex justify-center items-center bg-white rounded-md ">
      <h1 className="text-xl font-bold blue-gradient_text flex justify-center items-center">
       {'REDOWAN'.split('').map((latter, index)=>(<span className="hover:-mt-2 hover:text-3xl transition-all cursor-pointer duration-500 hover:duration-100 click:goodbyeLetterAnim" key={index}>{latter}</span>))}
       </h1>
       </div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-semibold'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white drop-shadow-xl" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white drop-shadow-xl"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
