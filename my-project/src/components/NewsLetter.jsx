import React from 'react'

const NewsLetter = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center  mx-6 bg-n-1/10 py-10
        md:items-start lg:items-start md:justify-start md:px-20'>
            <div className=' text-lg font-grotesk text-wrap py-2 px-3 '>
                SIGN UP TO RECEIVE THE LATEST FROM US
            </div>
            <div className='md:pl-28 lg:pl-64 lg: px-3 py-2 font-grotesk'>

                <div className='md:absolute  lg:absolute  flex-col justify-center items-center md:flex-row lg:justify-end   md:w-[38rem] lg:w-[38rem]'>

                <input type="email" className='bg-n-4 rounded-md w-[15rem] h-[2rem] placeholder:text-stone-100 px-4' placeholder='Your Email goes here'/>
                <button className='bg-green-600 rounded-md w-[9rem] h-[2rem]  '>SIGN UP</button>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default NewsLetter;
