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
              Certifications, education, and coding profiles.
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
                Coding Profiles
              </h4>
              <ul className="font-secondary leading-tight list-disc pl-5 space-y-3 break-words">
                <li>
                  <a
                    href="https://leetcode.com/u/Rupam0710/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    LeetCode: leetcode.com/u/Rupam0710
                  </a>
                </li>
                <li>
                  <a
                    href="https://takeuforward.org/profile/rupam_0710"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    TakeUForward: takeuforward.org/profile/rupam_0710
                  </a>
                </li>
                <li>Also active on Codeforces, CodeChef, and StopStalk.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-white/20 rounded-2xl p-6"
          >
            <h4 className="text-[22px] tracking-wider font-primary font-semibold mb-4">
              Open Source Contributions
            </h4>
            <p className="font-secondary mb-4">
              Active contributor to AI and developer tooling repositories with
              focus on practical agentic workflows, RAG patterns, and
              production-ready engineering.
            </p>
            <ul className="font-secondary leading-tight list-disc pl-5 space-y-3 break-words">
              <li>
                <a
                  href="https://github.com/Shubhamsaboo/awesome-llm-apps"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  awesome-llm-apps
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cathrynlavery/diagram-design"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  diagram-design
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/THU-MAIC/OpenMAIC"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  OpenMAIC
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GoogleCloudPlatform/knowledge-catalog"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  knowledge-catalog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/docling-project/docling"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  docling
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rupam0710/ai-cookbook"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient"
                >
                  ai-cookbook
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;