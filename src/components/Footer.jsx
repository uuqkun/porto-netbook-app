import React from 'react'
import { netbookLogo, netbookLogoWhite } from '../assets'
import { footerLinks, socialMedia } from '../constant'
import { font, layout, sizing } from '../styles'
import Button from './Button'

const Footer = () => (
  <footer className='flex items-center flex-col'>
    <div className={`flex w-full justify-between md:flex-row flex-col-reverse my-20`}>
      {/* footer links */}
      <div className='flex flex-wrap items-center flex-[1.5] md:mr-5 mr-0'>
        {footerLinks.map((footerLink) => (
          <ul
            key={footerLink.title}
            className="flex flex-col md:w-1/4 w-1/2 md:mb-0 mb-8">

            <h4
              className={`md:text-[18px] text-[16px] font-semibold text-white font-quicksand mb-3`}>{
                footerLink.title}
            </h4>

            {footerLink.links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className={`${font.link} font-quicksand text-gray-400 hover:text-white my-2`}>
                {link.name}
              </a>
            ))}
          </ul>
        ))}
      </div>

      {/* subscribe */}
      <div className={`${layout.flexStart} flex-col lg:mb-0 mb-10 flex-1`}>
        <h4 className={`${font.heading3} text-white font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}>
              Subscribe Netbook Newsletter
        </h4>

        <p className={`${font.paragraph} text-gray-300 mb-4 max-w-[370px] font-quicksand leading-7 text-start`}>The wise man therefore always holds in these matters to this principle of selection.</p>

        <div className='h-auto rounded-2xl border-2 border-white flex '>
          <input type="text" className='bg-footer-1 rounded-2xl outline-none text-white px-4'/>
          <Button value='Subscribe' classes={'bg-white font-semibold'}/>
        </div>
      </div>
    </div>

    <div className={`w-screen bg-footer-2 flex flex-col items-center`}>
      <div className={`${layout.boxWidth} flex md:flex-row flex-col items-center md:justify-between my-10`}>
        <p className={`${font.paragraph} text-slate-300 md:mb-0 mb-10`}>Besnik Creative Agency</p>

        <img src={netbookLogoWhite} alt="netbookLogo" className='w-[143px] h-[34px] md:mb-0 mb-10' />

        <div className='flex gap-5'>
          {socialMedia.map((sc) => (
            <div
              key={sc.name}>
              <img src={sc.icon} alt={sc.name} className='md:w-[36px] w-[32px]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer