import React from "react";

//count up
import CountUp from "react-countup";

//intersection observer hook
import { InView, useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a FreeLance Full-Stack Developer with over 6 months of
              experience.
            </h3>
            {/* 34 words paragraph */}
            <p className="mb-6">
              I am a Full stack developer with experience in React JS for
              working in frontend and Node JS , MongoDB And Express JS in
              backend. In React JS, I can create dynamic and responsive user
              interfaces with ease and in Node JS I can create robust and
              efficient server-side applications. I am also a Pupil in
              Codeforces , a 3 star in Codechef and having a rating 1598 in
              LeetCode.
            </p>
            {/* stats  */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  {/* k+ */}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div> */}
            </div>

            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
