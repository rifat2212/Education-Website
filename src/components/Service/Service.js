import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, details }=props.service;
    return (
      // ...every single 8 service
      <section className='py-16 px-16 '>
           <div className='service-container border-inherit py-6 grid w-full grid-cols-1  mx-auto'>
          <img class="object-cover object-center w-60 h-48 mx-auto rounded-lg" src={img} alt="" />
          <h1 className='text-xl font-bold text-green-600 py-2'>{name}</h1>
          <h1>{details}</h1>
      </div>
      </section>
     
    
            );
          };
  


export default Service;