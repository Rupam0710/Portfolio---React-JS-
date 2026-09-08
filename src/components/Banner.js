import React from "react";

//images
import Image from "../assets/rup_ava1.jpg";

//icons
import { FaGithub, FaLinkedin, FaLaptopCode, FaCode } from "react-icons/fa";

//type animation
import { TypeAnimation } from "react-type-animation";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              RUPAM <span>PAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "RAG and Agentic AI Builder",
                  2000,
                  "SDE-2",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              AI Engineer and Full Stack Developer with 3+ years of experience
              building enterprise systems and AI-powered products. I work across
              React, Angular, ASP.NET Core, FastAPI, Azure, AKS, and modern LLM
              stacks including LangChain, LangGraph, and multimodal AI APIs.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a
                href="/Rupam_Pal_08-_sept_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>
            {/* socials  */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/Rupam0710"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rupam-pal-0213a31a9/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/Rupam0710/"
                target="_blank"
                rel="noreferrer"
              >
                <FaCode />
              </a>
              <a
                href="https://takeuforward.org/profile/rupam_0710"
                target="_blank"
                rel="noreferrer"
              >
                <FaLaptopCode />
              </a>
            </motion.div>
          </div>
          {/* image  */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="Rupam Pal" className="rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
