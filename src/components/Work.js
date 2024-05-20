import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                My latest work consists of iNoteBook -  MERN stack application , 
                E-commerce application - Angular & JSON and Employee Management System. 
              </p>
              <button 
              className="btn btn-sm"
              onClick={() => window.open('https://github.com/Rupam0710', '_blank')}
              >View all projects</button>
            </div>
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div 
              className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/inotebook---MERN-stack-App', '_blank')}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open('https://github.com/Rupam0710/inotebook---MERN-stack-App', '_blank')}
                src={Img1}
                alt=""
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/inotebook---MERN-stack-App', '_blank')}
              >
                <span className="text-gradient">MERN Stack</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/inotebook---MERN-stack-App', '_blank')}
              >
                <span className="text-3xl text-white">iNoteBook</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div 
              className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/E-Commerce--Angular-Application', '_blank')}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open('https://github.com/Rupam0710/E-Commerce--Angular-Application', '_blank')}
                src={Img2}
                alt=""
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/E-Commerce--Angular-Application', '_blank')}
              >
                <span className="text-gradient">Angular and JSON Server</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/E-Commerce--Angular-Application', '_blank')}
              >
                <span className="text-3xl text-white" >E-Commerce Application</span>
              </div>
            </div>
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/Employee-Management-System', '_blank')}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open('https://github.com/Rupam0710/Employee-Management-System', '_blank')}
                src={Img3}
                alt=""
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/Employee-Management-System', '_blank')}
              >
                <span className="text-gradient">Angular , Dotnet Web API, NgRx Store</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
              onClick={() => window.open('https://github.com/Rupam0710/Employee-Management-System', '_blank')}
              >
                <span className="text-3xl text-white">Employee Management System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
