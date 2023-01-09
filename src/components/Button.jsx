import React from 'react'


const Button = ({ value, classes }) => (
  <button type='button' className={`py-3 px-7 text-[10px] md:text-xs font-normal font-quicksand rounded-xl ${classes}`}>{value}</button>
)

export default Button