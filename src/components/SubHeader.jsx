import React, { useState, useEffect } from "react";
import { inView, motion, useAnimation } from "framer-motion";

const SubHeader = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, transition: { duration: .25, delay: .5 }, y: 0 }}
      className="px-5 py-2 bg-dimBlue rounded-lg mb-4"
    >
      <p
        className={`label text-[12px] text-primary font-quicksand font-semibold`}
      >
        {value}
      </p>
    </motion.div>
  );
};

export default SubHeader;
