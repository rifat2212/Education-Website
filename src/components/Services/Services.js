import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        // .....services section
        <section className='py-8'>
            <h1 className='text-4xl font-bold py-9'>Our  <span className='text-green-600'> Service</span></h1>
            <p className='pb-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
           
        
        <div className='services-container grid grid-cols-3'>
           {
           services.map(service=><Service key={services.key} service={service}></Service>)
           }
        </div>
        </section>
    );
};

export default Services;