import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({
    className,
    id,
    Crosses,
    CrossesOffset,
    customPaddings,
    children
}) => {
    return (
        <>
            <div  className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${Crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''}`}`} id={id}>
                {children}
                <div className='absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none  md:block lg:left-7.5 xl:left-10'></div>
                <div className='absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none  md:block lg:right-7.5 xl:right-10'></div>
                {Crosses && (
                    <>
                        <div className={`hidden absolute top-0 left-7.5 right-7.5 height-0.25bg-stroke-1 ${CrossesOffset && CrossesOffset} pointer-events-none lg:block xl:left-10 lg:right-10`}></div>
                        <SectionSvg CrossesOffset={CrossesOffset}></SectionSvg>     
                    </> 
                )}
            </div>
        </>
    );
}

export default Section;
