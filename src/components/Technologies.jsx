import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiBootstrapFill,
} from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";

import { animate, easeIn, motion } from "framer-motion";

const Technologies = () => {
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24 p-10">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial= {{opacity:0,y:-100}}
      transition={{duration:0.8}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1, x: 0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div   variants={iconVariant(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div   variants={iconVariant(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapFill className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div   variants={iconVariant(1)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandRedux className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div   variants={iconVariant(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiReactrouter className="text-7xl text-red-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
