import React from 'react';

import Python from '../assets/python.png'
import PHP from '../assets/php.png';
import JavaScript from '../assets/js.png';
import Java from '../assets/java.png';

import Node from '../assets/node.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png'
import Springboot from '../assets/springboot.png';
import Symfony from '../assets/symfony.png';
import grpc from '../assets/grpc.png';
import rest from '../assets/restapi.png';
import graph from '../assets/graph.png';

import Mongo from '../assets/mongo.png';
import phpmyadmin from '../assets/phpmyadmin.png';
import mysql from '../assets/mysql.png';
import postgresql from '../assets/postgresql.png';

import vs from '../assets/vscode.png';
import intellij from '../assets/intellij.png';
import postman from '../assets/postman.png';
import xampp from '../assets/xamp.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full pt-20  bg-[#000000] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-violet-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div>
              <p className='text-2xl font-bold inline '>Programming Languages</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PHP} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>Java Script</p>
              </div>
          </div>

          <div>
              <p className='text-2xl font-bold inline '>Frameworks & Tools</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>Node.js</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Symfony} alt="HTML icon" />
                  <p className='my-4'>Symfony</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Springboot} alt="HTML icon" />
                  <p className='my-4'>SpringBoot</p>
              </div>
              <div className='shadow-md mt-10 shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto' src={angular} alt="HTML icon" />
                  <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={grpc} alt="HTML icon" />
                  <p className='my-4'>Grpc</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={graph} alt="HTML icon" />
                  <p className='my-4'>GrapgQl</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={rest} alt="HTML icon" />
                  <p className='my-4'>REST API</p>
              </div>
          </div>

          <div>
              <p className='text-2xl font-bold inline '>Data Bases</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>Mongo DB</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={phpmyadmin} alt="HTML icon" />
                  <p className='my-4'>PhpMyAdmin</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mysql} alt="HTML icon" />
                  <p className='my-4'>MySql</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={postgresql} alt="HTML icon" />
                  <p className='my-4'>PostGreSql</p>
              </div>
          </div>

          <div>
              <p className='text-2xl font-bold inline '>Development Tools</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={vs} alt="HTML icon" />
                  <p className='my-4'>Visual Studio Code</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={intellij} alt="HTML icon" />
                  <p className='my-4'>IntelliJ IDEA</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={postman} alt="HTML icon" />
                  <p className='my-4'>Postman</p>
              </div>
              <div className='shadow-md mt-10  shadow-[#cccccc] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={xampp} alt="HTML icon" />
                  <p className='my-4'>Xampp</p>
              </div>
          </div>


      </div>
    </div>
  );
};

export default Skills;