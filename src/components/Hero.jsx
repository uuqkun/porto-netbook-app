import React from 'react';
import Button from './Button';
import { hero } from '../assets';
import { font, layout, sizing } from '../styles';
import { SubHeader } from "../components";

const Hero = () => (
  <section className='flex md:flex-row flex-col my-10'>
    {/* hero left side */}
    <div className={`flex-1 ${layout.flexStart} flex-col lg:mb-0 mb-10`}>
      {/* Netbook Community */}
      <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
        <SubHeader value={"Netbook Community"} />
      </div>

      <h1 className={`${font.heading1} text-heading font-bold font-quicksand leading-[50px] md:leading-[65px] mb-4`}>
        Your Solutions for <br className="sm:block hidden" />
        Community
      </h1>

      <p className={`${font.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7`}>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>

      {/* left side's button */}
      <div>
        <Button value='About More' classes="bg-primary text-white shadow-button mr-4" />
        <Button value='Invite Friends' classes="text-primary border-[1px] border-primary" />
      </div>
    </div>

    {/* hero right side */}
    <div className={`flex-1 ${layout.flexCenter}`}>
      <div>
        <img 
        src={hero} 
        alt="image"
        className='md:max-w-[350px] lg:max-w-[585px] lg:h-[501px] w-full' />
      </div>
    </div>
  </section>
)


export default Hero