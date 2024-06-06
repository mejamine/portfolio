import React from 'react';

import poly from '../assets/poly.png'
import bac from '../assets/bac.jpg';
import prepa from '../assets/prepa.jpg';





const Skills = () => {
  return (
    <div name='education' className='w-full pt-20  bg-[#000000] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-violet-600 '>Education</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center justify-center py-8'>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={poly} alt="HTML icon" />
                  <p className='my-4'>Computer Science Engineering</p><br/>
                  <p className='my-4'>Polytechnique Of Sousse</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={prepa} alt="HTML icon" />
                  <p className='my-4'>Preparatory MP</p><br/>
                <p className='my-4'>Preparatory Institute for Engineering Studies of Monastir</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={bac} alt="HTML icon" />
                  <p className='my-4'>Bachelor degree Mathematics</p><br/>
                <p className='my-4'>Ibn rachik high school Kairouan</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
