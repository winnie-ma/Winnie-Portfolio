import { motion } from "framer-motion";
import { styles } from "../styles";
import { heroComputer } from "../assets";

const Hero = () => {
  return (
    <section className="w-full h-screen min-h-[800px] relative flex flex-col pt-[120px] pb-[160px] justify-center">
      <div
        className={`${styles.paddingX} flex flex-col justify-center h-full w-full max-w-7xl mx-auto`}
      >
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Winnie</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
        <div className="h-1/2">
          <img
            src={heroComputer}
            alt="computer"
            className="w-full h-full object-contain opacity-65"
          />
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen mx-auto">
//       <div
//         className={`${styles.paddingX} pt-[120px] max-w-7xl flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
//           <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915eff]">Winnie</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>
//       <ComputersCanvas />
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

export default Hero;
