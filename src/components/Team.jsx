import React from 'react'
import { fontSize, layout } from '../styles'
import Button from './Button'

const openTab = (e, id) => {
  let tabs = Array.from(document.getElementsByClassName('tabs'))
  let tabLinks = Array.from(document.getElementsByClassName('tablink'))

  tabs.forEach(tab => {
    tab.style.display = 'none'
  });

  tabLinks.forEach(tabLink => {
    tabLink.className = tabLink.className.replace('bg-primary', '')
    tabLink.className = tabLink.className.replace('shadow-button', '')
    tabLink.className = tabLink.className.replace('text-white', '')
  })

  document.getElementById(id).style.display = 'block'
  e.currentTarget.className += ' bg-primary text-white shadow-button '

}

const Team = () => {
  return (
    <section className={`${layout.flexCenter} flex-col my-20`}>
      {/* title */}
      <div className='my-10'>
        <div className={`flex-1 ${layout.flexCenter} flex-col lg:mb-0 mb-10`}>
          <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
            <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Valuable Team</p>
          </div>

          <h1 className={`${fontSize.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}>
            Our Active Members
          </h1>

          <p className={`${fontSize.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7 text-center`}>when an unknown printer took a galley of type and meeting fari scrambled it.</p>
        </div>
      </div>

      {/* nav tabs */}
      <div className={`my-10 bg-dimBlue rounded-2xl p-3`}>
        <Button
          value='New'
          classes='tablink link-item text-heading' 
          event={(e) => openTab(e, 'new') }/>
        <Button
          value='Popular'
          classes='tablink link-item text-heading' 
          event={(e) => openTab(e,'popular') }/>
        <Button
          value='Active'
          classes='tablink link-item bg-primary text-white shadow-button' 
          event={(e) => openTab(e, 'active') }/>
      </div>

      {/* members */}
      <div className='flex'>
        <div id="new" className='member-tab tabs hidden'>
          new
        </div>
        <div id="popular" className='member-tab tabs hidden'>
          popular
        </div>
        <div id="active" className='member-tab tabs'>
          active
        </div>
      </div>
    </section>
  )
}


export default Team