import React from 'react';
import image from '../../images/hero-bg.jpg'
import course from '../../images/course1.jpg'
import course2 from '../../images/courses-2.jpg'
import course3 from '../../images/course3.jpg'
import education1 from '../../images/education1.jpg'
import education2 from '../../images/education2.jpg'

const Home = () => {
    return (

<div>

    {/* header/cover image */}
<div className='bg-cover  bg-opacity-10  px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center'  style={{height:500, backgroundImage: `url(${image}` }}>

    {/*...........header/cover texts */}
    <div className='text-left text-white px-8 py-16 '>
    <h1 className='text-3xl font-semibold text-gray-800 uppercase dark:text-white lg:text-5xl'>BEST ONLINE <br></br>
LEARNING SYSTEM</h1>
<p className='text-left py-2 sm:text-none '>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. <br /> iste natus error sit voluptatem accusantium doloremque laudantium</p>
<button className='rounded lg:w-auto hover:bg-green-600 py-3 px-6 bg-green-500 mt-5 font-semibold'>Our System</button>

    </div>
</div>  
{/* header part end...........    */}

{/* ....service section */}
<section>
    <h1 className='text-4xl pt-16 font-semibold'>Our <span className='text-green-600'> Services</span></h1>
   
            <div class="
          relative
          items-center
          w-full
          px-5
          py-12
          mx-auto
          md:px-12
          lg:px-24
          max-w-7xl
        ">
              <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                <div class="p-6">
                  <img class="
                object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              " src={course2} alt="blog"/>
                  <div class="inline-flex justify-between w-full">
                    <h1 class="
                  mb-8
                  text-xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-green-600
                "> English primium Course</h1>
                    <span>$80.00</span>
                  </div>
                  <p class="mx-auto text-base text-left font-medium leading-relaxed text-gray-900"> A Google Docs scam that appears to be widespread began landing in users’ inboxes on Wednesday  </p>
                </div>
                <div class="p-6">
                  <img class="
                object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              " src={course} alt="blog"/>
                  <div class="inline-flex justify-between w-full">
                    <h1 class="
                  mb-8
                  text-xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-green-600
                "> Language Premium Course. </h1>
                    <span>$90.00</span>
                  </div>
                  <p class="mx-auto text-base font-medium leading-relaxed text-left text-gray-900"> A Google Docs scam that appears to be widespread began landing in users’ inboxes on Wednesday </p>
                </div>
                <div class="p-6">
                  <img class="
                object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              " src={course3} alt="blog"/>
                  <div class="inline-flex justify-between w-full">
                    <h1 class="
                  mb-8
                  text-xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-green-600
                "> Premium Admission Course </h1>
                    <span>$60.00</span>
                  </div>
                  <p class="mx-auto text-base font-medium leading-relaxed text-gray-900 text-left"> A Google Docs scam that appears to be widespread began landing in users’ inboxes on Wednesday </p>
                </div>
              </div>
            </div>
          </section>
          <hr />
{/* .......... */}

{/* ......Another Section  */}

          <section class="px-4 py-24 mx-auto max-w-7xl">
  <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">About <span className='text-green-600'> Ezuca</span> </h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
      </p>
    </div>
    <div class="w-full h-full  bg-gray-200">
        <img src={education1} alt="" />
    </div>
  </div>
  <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div class="order-none md:order-2">
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you  <span className='text-green-600'> integrate Payments </span> </h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
        scratch.
      </p>
 
    </div>
    <div class="w-full h-full  bg-gray-200">
        <img src={education2} alt="" />
    </div>
  </div>
</section>

          {/* .......end...... */}

       
</div>
    );
};

export default Home;