
import React from "react";




const Herosection = () => {



  return (
    <div>
      <div className="min-h-[800px] relative pt-[30px]" style={{background:"url('homeimg/herosecBg.png')" , backgroundRepeat:"no-repeat" , backgroundSize:"100% 100%"}}>


        <div className="w-full h-full ">
          <div className="grid lg:grid-cols-2  gap-12 mt-16  container items-center">

            <div className=" text-white space-y-6">
              <div className="text-4xl lg:text-7xl font-semibold">
                Easy To Find Your Dream Job
              </div>
              <div>Get access to millions of company reviews</div>
            </div>

            <div>
              <img src="homeimg/herosecOne.png" className="w-[60%] lg:w-full"  alt="" />
            </div>
          </div>

          <div className="lg:flex grid gap-9 container mt-9">

            <div className="bg-white flex gap-3 rounded-lg px-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>

              <input type="text" className=" py-4 md:w-[300px]" placeholder="Job Title, keywords, or company" name="" id="" />
            </div>


            <div className="bg-white flex justify-between gap-3 rounded-lg px-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              </div>

              <input type="text" className=" py-4 md:w-[290px]" placeholder="City, state, zip code, or ‘remote’" name="" id="" />


              <button className="rounded-xl bg-colorThree px-6 py-3 text-sm  font-semibold text-white text-nowrap">
                Find a job
              </button>
            </div>

          </div>

        </div>




        {/* <img src="homeimg/herosecBg.png" className="w-full h-full" alt="" /> */}




      </div>


      <div className="container  xl:px-44 mt-[150px] grid md:grid-cols-2 lg:grid-cols-3 gap-16">

        <div className="shadow-lg flex items-center gap-6  justify-center py-6 rounded-xl">

          <img src="homeimg/ourstatesOne.png" className="w-20" alt="" />

          <div className=" space-y-2">

            <div className="text-4xl font-semibold">50K +</div>
            <div>Job Vacancies</div>
          </div>

        </div>

        <div className="shadow-lg flex items-center gap-6  justify-center py-6 rounded-xl">

          <img src="homeimg/ourstatesTwo.png" className="w-20" alt="" />

          <div className=" space-y-2">

            <div className="text-4xl font-semibold">20K +</div>
            <div>People got hired</div>
          </div>

        </div>

        <div className="shadow-lg flex items-center gap-6  justify-center py-6 rounded-xl">

          <img src="homeimg/ourstatesOne.png" className="w-20" alt="" />

          <div className=" space-y-2">

            <div className="text-4xl font-semibold">50K +</div>
            <div>Job Vacancies</div>
          </div>

        </div>


      </div>


    </div>
  );
};

export default Herosection;

