import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={() => window.open(url, "_blank")}
          className="relative w-full h-[230px] cursor-pointer"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="sm:flex block">
        
        <motion.div variants={textVariant()} className='flex-1 sm:mb-0 mb-14 flex flex-col justify-center items-start'>
          <p className={styles.sectionSubText}>My Works</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring",0.5, 0.75)} className="flex-1 flex sm:flex-col flex-row justify-center items-center">
          <h2 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] text-center sm:block hidden">Socials</h2>
          <div
            className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer mx-auto hover:scale-110 duration-300'
          >
            <img  
              onClick={() => window.open("https://github.com/Akshat-Kumar-X", "_blank")}
              src={github}
              alt='Github'
              className='w-3/4 h-3/4 object-contain '
            />
          </div>
          <img 
            onClick={() => window.open("https://www.linkedin.com/in/akshat-kumar-86203224a/", "_blank")}
            src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" 
            alt="Linkedin"  
            className="h-[100px] mx-auto cursor-pointer hover:scale-110 duration-300"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
