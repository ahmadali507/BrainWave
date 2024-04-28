import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const MyFooter = () => {
  return (
    <Section Crosses className="!px-0 !py-10">
        <div className='container flex sm:justify-between justify-center items-center  gap-10 max-sm:flex-col '>
           <p className='caption text-n-4 lg:block'>{new Date().getFullYear()}. ALL RIGHTS RESERVED</p>


           <ul className='flex gap-5 flex-wrap'>
            {
                socials.map((item)=>(
                    <a href={item.url} target = "_blank" key={item.id} className='flex items-center justify-center w-10 h-10 bg-purple-300 rounded-full transition-colors hover:bg-n-6'>
                        <img src={item.iconUrl} width={26} height={24} alt="" />
                    </a>
                ))
            }
           </ul>
        </div>
    </Section>
  );
}

export default MyFooter; 
