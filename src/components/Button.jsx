const Button = ({ value, classes, event: onClick }) => (
  <button
    type="button"
    className={`py-4 px-7 text-[12px] md:text-[16px] tracking-wide font-bold font-quicksand rounded-xl outline-none w-auto transition ease-in-out hover:scale-110 ${classes}`}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
