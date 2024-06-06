import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
      <div>
        <Link className="cursor-pointer"to='home' smooth={true} duration={500}>
          <img src={Logo} alt='Logo Image' style={{ width: '80px' }} />
        </Link> 
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-violet-600'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-violet-600'>
          <Link to='contact' smooth={true} duration={500}>
            Info
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:text-violet-600'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl hover:text-violet-600'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-violet-600'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
