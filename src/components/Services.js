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
    name: "AI Engineering",
    description:
      "RAG pipelines, agentic workflows, and multi-agent systems using LangChain, LangGraph, PydanticAI, and LLM APIs from OpenAI, Gemini, and Groq.",
    link: "Project portfolio",
    hrefLink: "https://github.com/Rupam0710",
    showAction: true,
  },
  {
    name: "Frontend",
    description:
      "React, Angular, TypeScript, JavaScript, and Tailwind CSS for responsive product experiences and maintainable component-driven interfaces.",
    link: "",
    hrefLink: "https://github.com/Rupam0710",
    showAction: false,
  },
  {
    name: "Backend",
    description:
      "FastAPI, ASP.NET Core, .NET 8, C#, REST APIs, Entity Framework Core, CQRS, SQLAlchemy, and Node.js for scalable service architecture.",
    link: "",
    hrefLink: "https://github.com/Rupam0710",
    showAction: false,
  },
  {
    name: "Cloud, DevOps and Security",
    description:
      "Microsoft Azure, AKS, Docker, Helm, Azure Pipelines, Microsoft Entra ID, OAuth 2.0, OpenID Connect, RBAC, and production CI/CD delivery.",
    link: "Professional profile",
    hrefLink: "https://www.linkedin.com/in/rupam-pal-0213a31a9/",
    showAction: true,
  },
  {
    name: "Data, Testing, and Tooling",
    description:
      "SQL Server, PostgreSQL, MongoDB, Redis, pgvector, FAISS, ChromaDB, Cypress, Postman, Swagger, and practical Agile delivery practices.",
    link: "Coding footprint",
    hrefLink: "https://leetcode.com/u/Rupam0710/",
    showAction: true,
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
              I build secure, cloud-ready full stack and AI products with focus
              on practical outcomes, quality, and performance.
            </h3>
            <button
              className="btn btn-sm"
              onClick={() => window.open("https://github.com/Rupam0710", "_blank")}
            >
              See my work
            </button>
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
                const { name, description, link, hrefLink, showAction } = service;
                return (
                  <div
                    className="border-b border-white/20 min-h-[146px] mb-[38px] flex justify-between gap-x-4"
                    key={index}
                  >
                    <div className="flex-1 max-w-[476px] pr-2">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="w-[152px] shrink-0 flex flex-col items-end text-right">
                      {showAction ? (
                        <>
                          <a
                            href={hrefLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                          >
                            <BsArrowUpRight />
                          </a>
                          <a
                            href={hrefLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gradient text-sm"
                          >
                            {link}
                          </a>
                        </>
                      ) : null}
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
