import { navLinks } from '../constant'
import { netbookLogo, menu, close } from '../assets'
import { font, layout, sizing } from '../styles'
import Button from './Button'
import { useState } from 'react'


const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <nav className={`flex justify-between items-center ${sizing.paddingY}`}>
      <img
        src={netbookLogo}
        alt="menu"
        className='w-[143px] h-[34px]' />

      {/* Desktop view nav list */}
      <ul className={`sm:flex hidden flex-1 justify-between items-center pl-20`}>
        <div className='flex gap-8'>
          {navLinks.map((navLink) => (
            <li key={navLink.id} className='list-none '>
              <a href={navLink.id} className={`font-quicksand text ${font.link}`}>{navLink.value}</a>
            </li>
          ))}
        </div>

        <div>
          <Button value={'Login'} classes='bg-primary text-white shadow-button'/>
        </div>
      </ul>

      {/* toggle () => appears on smaller screen size (appears at mobile view) */}
      <div className="sm:hidden flex">
        {/* toggle button */}
        <img
          src={Toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!Toggle)}
          className='z-[5]' />

        <div className={`${Toggle ? 'flex' : 'hidden'} flex-col gap-8 absolute top-16  px-5 py-5 w-auto z-0 bg-white shadow-card rounded-md bar`}>
          {navLinks.map((navLink) => (
            <li key={navLink.id} className='list-none text-right'>
              <a href={navLink.id} className={`font-quicksand text ${font.link}`}>{navLink.value}</a>
            </li>
          ))}
          <Button value={'Login'} classes='bg-primary text-white shadow-button'/>
        </div>

      </div>
    </nav>
  )
}

export default Navbar