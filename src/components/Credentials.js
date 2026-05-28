import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Credentials = () => {
  return (
    <section className="section" id="credentials">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent mb-4">Credentials.</h2>
            <h3 className="h3 max-w-[720px]">
              Certifications, education, and competitive programming achievements.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-white/20 rounded-2xl p-6"
            >
              <h4 className="text-[22px] tracking-wider font-primary font-semibold mb-4">
                Certifications
              </h4>
              <ul className="font-secondary leading-tight list-disc pl-5 space-y-3">
                <li>AZ-900: Microsoft Azure Fundamentals</li>
                <li>AZ-204: Microsoft Azure Developer Associate</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-white/20 rounded-2xl p-6"
            >
              <h4 className="text-[22px] tracking-wider font-primary font-semibold mb-4">
                Education
              </h4>
              <ul className="font-secondary leading-tight list-disc pl-5 space-y-3">
                <li>
                  Bachelor of Engineering in Information Science and Engineering
                </li>
                <li>RR Institute of Technology, VTU, Bangalore</li>
                <li>2019 - 2023 | CGPA: 8.5/10</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-white/20 rounded-2xl p-6"
            >
              <h4 className="text-[22px] tracking-wider font-primary font-semibold mb-4">
                Achievements
              </h4>
              <ul className="font-secondary leading-tight list-disc pl-5 space-y-3">
                <li>CodeChef Starters 82 Div 3 - Global Rank 186</li>
                <li>CodeChef Starters 83 Div 3 - Global Rank 271</li>
                <li>Codeforces Round 865 Div 2 - Global Rank 2402</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;