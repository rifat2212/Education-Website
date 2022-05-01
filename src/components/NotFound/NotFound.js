import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div>
          {/* .....not found section */}
            <section class="px-4 py-24 mx-auto max-w-7xl text-center">
  <div class="w-full mx-auto text-center lg:w-2/3">
    <h1 class="mb-4 text-6xl font-bold text-green-600">404</h1>
    <p class="mb-3 text-xl font-bold text-gray-900 md:text-2xl">Oh no! We <span class='text-red-600'>couldn’t find </span>the page you were looking for.</p>
    <p class="mb-3 text-lg font-medium text-gray-700">
      Have questions? <NavLink class='underline text-green-600' to='/contact'>Contact</NavLink> with us
    
      <br  />
      <h1 class='pt-8 pb-2'>Back To</h1>
     <NavLink class='border-solid bg-green-600 py-2 px-5 rounded text-white' to='/'>Home</NavLink>
    </p>
  </div>
</section>

        </div>
    );
};

export default NotFound;