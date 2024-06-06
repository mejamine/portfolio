import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full pt-20 bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full  gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-violet-600'>
              About
            </p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mohamed Amine Mejbrie. Take a look around and know me better!</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. Constructing backend applications is one of my strengths which made me a good consultant in this field.
              <br/>If you're trying to build an exceptional app for your company dont hesitate to check my profile and contact me!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;