import React from 'react'

function Testimonials() {
  return (
    <div className='flex flex-col justify-center items-center gap-[0.75rem]'>

        <h2 className='title-primary my-[1rem]'>Hear from individuals we have worked with</h2>

        <div className='flex flex-col lg-sm:flex-row justify-center items-start gap-[0.75rem]'>

        <div className=' w-[100%] rounded-[8px] outline outline-[1px] outline-[#131313] p-[1rem] flex flex-col gap-[0.5rem]'>

            <div className='flex gap-[0.5rem] md:gap-[1rem] items-center'>
              <div className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] bg-black rounded-full'></div>
              <h3 className='title-sub font-semibold'>Nikhil</h3>
            </div>

            <p className='title-sub text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex nobis aspernatur, fugiat ipsum qui. Quis natus mollitia odio iste!</p>

            </div>

            <div className=' w-[100%] rounded-[8px] outline outline-[1px] outline-[#131313] p-[1rem] flex flex-col gap-[0.5rem]'>

            <div className='flex gap-[0.5rem] md:gap-[1rem] items-center'>
              <div className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] bg-black rounded-full'></div>
              <h3 className='title-sub font-semibold'>Nikhil</h3>
            </div>

            <p className='title-sub text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis nihil rem repellat illo quas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex nobis aspernatur, fugiat ipsum qui. Quis natus mollitia odio iste!</p>

            </div>

            <div className=' w-[100%] rounded-[8px] outline outline-[1px] outline-[#131313] p-[1rem] flex flex-col gap-[0.5rem]'>

            <div className='flex gap-[0.5rem] md:gap-[1rem] items-center'>
              <div className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] bg-black rounded-full'></div>
              <h3 className='title-sub font-semibold'>Nikhil</h3>
            </div>

            <p className='title-sub text-start'>Deleniti ex nobis aspernatur, fugiat ipsum qui. Quis natus mollitia odio iste!</p>

            </div>

        </div> 

    </div>
  )
}

export default Testimonials