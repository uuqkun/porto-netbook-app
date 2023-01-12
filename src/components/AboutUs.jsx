import React from 'react'
import { discussion, message, network } from '../assets'
import { joinItems } from '../constant'
import { font, layout } from '../styles'

const AboutUs = () => {
  return (
    <section className={`flex md:flex-row flex-col my-20 py-10`}>
      {/* left side */}
      <div className={`flex-1 ${layout.flexStart} flex-col lg:mb-0 mb-10`}>
        <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
          <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Whats Netboks?</p>
        </div>

        <h1 className={`${font.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4`}>
          Why Join to Netbook <br className="sm:block hidden" />
          Social Network?
        </h1>

        <p className={`${font.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7`}>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>

        <div>
          {joinItems.map((item, index) => (
            <li className={`${index !== joinItems.length - 1 ? 'mb-2' : 'mb-0' } list-none flex items-center font-quicksand font-semibold text-heading`} key={item.id}>
              <img src={item.icon} alt="icon" className='w-[18px] mr-3' />
              {item.title}
            </li>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className={`flex-1 flex ${layout.flexCenter} gap-7`}>
        <img src={discussion} alt="discussion" className='w-1/2 flex-1 lg:w-[270px] lg:h-[378px] rounded-xl shadow-sm' />
        <div className='w-1/2 flex flex-col gap-7 flex-1'>
          <img src={message} alt="message" className='w-full lg:w-[265px] lg:h-[238px] rounded-xl shadow-sm' />
          <img src={network} alt="network" className='w-full lg:w-[265px] lg:h-[238px] rounded-xl shadow-sm' />
        </div>
      </div>
    </section>
  )
}

export default AboutUs