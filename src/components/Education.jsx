import React from 'react';
import img from '../assets/Sakib.jpg'
const Education = () => {
    return(
        <>
        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative  isolate overflow-hidden bg-white px-6 pt-16 shadow sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="me-auto max-w-md text-center  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            
           <div>
            <h1 className='text-[20px]'>Name of Degree: Secondary School Certificate(SSC)</h1>
            <p>Institute: St. Josephs High School</p>
            <p>Passing Year: 2012</p>
            <p>Result: 4.75</p>
           </div>
          </div>
          <div className="relative ms-auto ">
            <img
              className="  w-[10rem] max-w-none m-5 rounded-md shadow-white "
              src={img}
              alt="App screenshot"
              
            />
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Education