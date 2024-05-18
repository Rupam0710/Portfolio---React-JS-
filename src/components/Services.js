import React from "react";

//icons
import { BsArrowUpRight } from "react-icons/bs";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "Full Stack Development",
    description:
      "As a seasoned full stack developer, I possess a versatile skill set, proficiently navigating through MERN (MongoDB, Express.js, React.js, Node.js), Angular, .NET, and databases like SQL Server.",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "I have knowledge in styling using both Tailwind CSS and BootStrap CSS. I have used both stylings in various projects.",
    link: "Learn more",
  },
  {
    name: "Competitive Programmer",
    description:
      "I have been doing competitive programming for the past 1 year on various platforms like LeetCode ,Codeforces and Codechef. I am a 3 star on Codechef with a rating of 1647, Pupil on Codeforces and rating of 1598 in LeetCode.",
    link: "Learn more",
  },
  {
    name: "Youtuber",
    description:
      "I have a youtube channel - The Third Tier Coder where I teach competitive programming to the fellow students and help them solve any doubts they have.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a FreeLance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list  */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link, linkRef } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
