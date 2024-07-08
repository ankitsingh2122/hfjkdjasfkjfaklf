import React from "react";
import { motion } from "framer-motion";

import { EDUCATIONS } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-10">
      <motion.h2 
       whileInView={{opacity:1,y:0}}
       initial= {{opacity:0,y:-100}}
       transition={{duration:0.5}}
      className="my-20 text-center text-3xl">Education</motion.h2>
      <div>
        {EDUCATIONS.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial= {{opacity:0,x:-100}}
             transition={{duration:0.8}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
               whileInView={{opacity:1,x:0}}
               initial= {{opacity:0,x:100}}
               transition={{duration:0.8}} 
            className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">
            {experience.Academic}
          </h6>
          <p className="mb-4">
            {experience.description}
          </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
