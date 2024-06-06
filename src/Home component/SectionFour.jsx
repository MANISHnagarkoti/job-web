import React from 'react'

const SectionFour = () => {
    return (
        <div className=' mt-[100px] container '>
            <div className='relative h-[300px] rounded-3xl overflow-hidden'>

                <div className='w-full h-full absolute top-0 left-0 right-0 py-4 flex flex-col justify-center items-center bg-black/10'>

                    <div className='text-2xl md:text-5xl font-semibold text-white text-center'>Make a difference with your skills</div>

                    <div className='mt-6 flex justify-center'>
                        <div className='rounded-full px-4 py-2 bg-colorThree text-white cursor-pointer'>
                            Create a account
                        </div>

                    </div>

                </div>


                <img src="homeimg/sectionFoutbg.png" className="w-full h-full object-cover" alt="" />
            </div>

   

        </div>
    )
}

export default SectionFour