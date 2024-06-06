import React from 'react'

const Footer = () => {
    return (


        <footer className=' mt-32 bg-colorThree text-white'>

            <div className='container grid grid-cols-2 lg:grid-cols-5 gap-16 py-12'>

                <ul className='space-y-4'>
                    <div><li className='text-xl pb-8 font-semibold'>About Us</li> </div>


                    <li>@jobhunt</li>


                </ul>

                <ul className='space-y-4'>
                    <div><li className='text-xl pb-8 font-semibold'>Company</li> </div>


                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>Blogs</li>
                    <li>FASQs</li>
                    <li>Contact</li>

                </ul>



                <ul className='space-y-4'>
                    <div><li className='text-xl pb-8 font-semibold'>Services</li> </div>


                    <li>Jobs</li>
                    <li>Companies</li>
                    <li>Employers</li>
                    <li>Pricing</li>
                    <li>Partner</li>


                </ul>


                <ul className='col-span-2'>
                    <div><li className='text-xl  font-semibold'>Subscribe to our Newsletter</li> </div>
                    <div className='mt-2'>We’ll keep you updated with the best new jobs</div>

                    <div className="bg-white flex justify-between gap-3 rounded-lg px-2 items-center mt-32">
              

                        <input type="text" className=" py-4 ps-4 md:w-[290px]" placeholder="Enter the mail here" name="" id="" />


                        <button className="rounded-xl bg-colorThree px-6 py-3 text-sm  font-semibold text-white text-nowrap">
                        Send
                        </button>
                    </div>
                    <div className='mt-4 font-semibold text-2xl'>
                    www.jobhunt.com
                    </div>
                </ul>


            </div>






        </footer>

    )
}

export default Footer