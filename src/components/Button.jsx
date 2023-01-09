const Button = ({ value, classes }) => (
  <button type='button' className={`py-4 px-8 text-xs md:text-[14px] font-normal font-quicksand rounded-xl ${classes}`}>{value}</button>
)

export default Button