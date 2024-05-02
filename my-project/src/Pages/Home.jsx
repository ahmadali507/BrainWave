import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Collaboration from '../components/Collaboration'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Roadmap from '../components/Roadmap'
import MyFooter from '../components/MyFooter'
import ButtonGradient from '../assets/svg/ButtonGradient'

const Home = () => {
  return (
    <div>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <MyFooter/>
    </div>
    <ButtonGradient/>
    </div>
  )
}

export default Home
