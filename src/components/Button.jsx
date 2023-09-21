import { easeInOut, motion } from "framer-motion";

const Button = ({ value, classes, event: onClick }) => (
  <motion.button
    type="button"
    className={`py-4 px-7 text-[12px] md:text-[16px] tracking-wide font-bold font-quicksand rounded-xl outline-none w-auto transition ease-in-out hover:scale-110 ${classes}`}
    onClick={onClick}
    whileInView={{ opacity: [0.5, 1] }}
    transition={{ duration: 0.5 }}
  >
    {value}
  </motion.button>
);

export default Button;
