import React from 'react'

import brackets from '../assets/svg/Brackets'
const Tagline = (className , children) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className='mx-3 text-n-3'></div>
    </div>
  )
}

export default Tagline
