const Button = ({ value, classes, event: onClick}) => (
  <button
    type='button'
    className={`py-4 px-7 text-[12px] md:text-[14px]  font-quicksand rounded-xl outline-none w-auto ${classes}`} 
    onClick={onClick}>
    {value}
  </button>
)

export default Button