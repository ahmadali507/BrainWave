import React from 'react'
import Section from './Section';
import { collabApps, collabContent, collabText } from '../constants';
import Button from './Button';
import { brainwave, brainwaveSymbol, check } from '../assets';
import {LeftCurve, RightCurve} from './design/Collaboration'

const Collaboration = () => {
    return (
        <Section Crosses >
            <div className='container lg:flex'>
                <div className='max-w-[25rem] '>
                    <h2 className='h-2 mb-4 pl-5 md:mb-8 font-bold'> AI Chat app for seamless Collaboration</h2>
                    <ul className='max-w-[22rem]  mb-10 md:mb-14 '>
                        {
                            collabContent.map((item) => (
                                <li className='mb-3 py-3 pl-4' key={item.id}>
                                    <div className='flex items-center'>
                                        <img src={check} alt="check" width={24} height={24} />
                                        <h6 className='body-2 ml-5'>
                                            {item.title}
                                        </h6>

                                    </div>
                                    {item.text && (
                                        <p className='body-2 mt-3 text-n-4'>
                                            {item.text}
                                        </p>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <Button className="ml-4">Try it now</Button>
                </div>
                <div className='lg:ml-auto xl:w-[38rem]'>
                    <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:2-[22rem] lg:mx-auto mt-4'>{collabText}</p>

                    <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100'>

                        <div className='flex w-60 aspect-square m-auto border border-n-6  rounded-full'>
                            <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient= rounded-full'>

                                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                    <img src={brainwaveSymbol} alt="" width={48} height={48} />
                                </div>

                            </div>

                        </div>
                        <ul>
                            {
                                collabApps.map((app, index) => (
                                    <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45} `}>
                                        <div className={`relative -top-[1.6rem]flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                            <img className="w-auto"
                                                src={app.icon} alt="" width={app.width} height={app.height} />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        <LeftCurve/>
                        <RightCurve/>

                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Collaboration;
