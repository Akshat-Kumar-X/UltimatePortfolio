import { styles } from "../styles";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex justify-center items-center'>
      <div className={`${styles.paddingX} justify-center items-center  max-w-7xl mx-auto flex flex-row gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Akshat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications & <br className='sm:block hidden' />
            Solutions for Real World Problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;