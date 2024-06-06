import React from 'react';
import git from '../assets/github1.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume.png';
const Contact = () => {
  return (
    <div name='contact' className='w-full pt-40 bg-[#000000]  justify-center items-center p-4'>
            <div className='pb-8 justify-center items-center text-center'>
                <p className='text-4xl text-center font-bold inline border-b-4 border-violet-600 text-gray-300'>Info</p>
            </div><br/>
            <div className='justify-center items-center flex mt-10'>
                <a href="https://www.linkedin.com/in/mejbrimohamedamine" ><img className='w-8 mx-10' src={linkedin} alt="HTML icon" /></a>
                <a href="https://github.com/mejamine"><img className='w-10 mx-10' src={git} alt="HTML icon" /></a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><img className='w-10 mx-10' src={resume} alt="HTML icon" /></a>
            </div>
            <div className='justify-center items-center text-center mt-10 text-white'>
              +216 50 77 19 60 <br/>
              mejbria9@gmail.com
            </div>
    </div>
  )
}

export default Contact