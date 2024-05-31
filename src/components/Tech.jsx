import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-14 flex flex-col justify-center items-center">
        <p className={`${styles.sectionSubText} `}>MY SKILLS</p>
        <h2 className={`${styles.sectionHeadText}`}>Technical Skills</h2>
      </motion.div>

      <div className=' flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "tech");