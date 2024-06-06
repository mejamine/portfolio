import React from 'react';
import gpro from '../assets/gpro.jpg';

const About = () => {
  return (
    <div name='experience' className='w-full pt-20 bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full  gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-violet-600 '>Experiences</p>
              <p className='py-4'>Internships</p>
          </div>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='shadow-md   shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto' src={gpro} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>SpringBoot & Angular developper</p>
              </div>
            <div className=''>
              <p className='my-auto mt-10'>Developping a visit management desktop app with a search options in bothe admin and visitors interfaces.<br/>
                this project includes multiple CRUDs for all entities and a searching algorithm for each entity.<br/>
                (SpringBoot, PostgreSQL, Angular, REST API)</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;