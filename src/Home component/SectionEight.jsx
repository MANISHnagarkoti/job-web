import React from 'react'

const SectionEight = () => {
    return (
        <div className='h-[800px] relative -z-20'>

            <div className='absolute top-0 w-full h-full flex items-center justify-center '>

                <div className='container'>

                    <div className='text-center text-4xl text-white font-semibold'>
                        We help move
                        <br />
                        visitors

                    </div>

                    <div className='mt-6 text-white text-lg text-center'>From affordable transportation solutions to effortless expensing, we’ll help drive your business forward by getting your people where they need to go.</div>

                    <div className='flex justify-center mt-12'>
                        <div className='rounded-full px-6 py-3 m-auto inline-block bg-white cursor-pointer'>
                            Learn More
                        </div>
                    </div>
                </div>

            </div>

            <img src="homeimg/secEightbg.png" className='w-full h-full  object-cover md:object-fill' alt="" />


        </div>
    )
}

export default SectionEight