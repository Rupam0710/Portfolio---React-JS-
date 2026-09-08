import React from "react";

//count up
import CountUp from "react-countup";

//intersection observer hook
import { useInView } from "react-intersection-observer";

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
              AI Engineer and Full Stack Developer focused on enterprise
              platforms, agentic AI, and cloud-native delivery.
            </h3>
            <p className="mb-6">
              I currently work as an SDE-2 at Euromonitor International,
              building secure and scalable products with React, Angular,
              ASP.NET Core, FastAPI, SQL Server, and Microsoft Azure. My work
              includes RAG and agentic AI use cases, CI/CD automation, RBAC,
              cloud deployments on AKS, and full stack architecture in Agile
              teams.
            </p>
            <div className="mb-6">
              <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                Experience
              </h4>
              <ul className="font-secondary leading-tight list-disc pl-5 space-y-2">
                <li>
                  <strong>
                    Software Development Engineer 2, Euromonitor International
                    (Apr 2025 - Present)
                  </strong>
                  : Built an agentic AI sprint analytics platform with ML.NET
                  FastForest and LLM APIs, delivered the North Star Delivery
                  Report dashboard, and implemented secure key management,
                  backend proxying, and AKS deployments with Docker, Helm, and
                  Azure Pipelines.
                </li>
                <li>
                  <strong>
                    Software Development Engineer 1, Euromonitor International
                    (Feb 2024 - Apr 2025)
                  </strong>
                  : Developed scalable EMMA full stack features using Angular,
                  ASP.NET Core Web API, C#, Entity Framework, and SQL Server;
                  built REST APIs with CQRS and improved data layer
                  performance and reliability.
                </li>
                <li>
                  <strong>
                    SDE-1 Intern, Euromonitor International (Oct 2023 - Jan
                    2024)
                  </strong>
                  : Built e-commerce and platform features using Angular and
                  .NET Core REST APIs while contributing to Agile delivery and
                  full stack issue resolution.
                </li>
              </ul>
            </div>
            {/* stats  */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Azure
                  <br />
                  Certifications
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a
                href="https://github.com/Rupam0710"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                GitHub Overview
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
