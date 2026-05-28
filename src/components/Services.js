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
    name: "Frontend",
    description:
      "Angular, React, HTML5, CSS3, TypeScript, and JavaScript for responsive enterprise interfaces and maintainable component-driven UIs.",
    link: "Learn more",
    hrefLink : "https://github.com/Rupam0710",
  },
  {
    name: "Backend",
    description:
      "ASP.NET Core, .NET Core, C#, REST API development, Entity Framework Core, CQRS patterns, and Node.js for scalable service architecture.",
    link: "Learn more",
    hrefLink: "https://github.com/Rupam0710",
  },
  {
    name: "Cloud, DevOps and Security",
    description:
      "Microsoft Azure, Azure App Services, Azure DevOps, Azure Pipelines, CI/CD, Microsoft Entra ID, OAuth 2.0, OpenID Connect, and RBAC.",
    link: "Learn More",
    hrefLink : "https://www.linkedin.com/in/rupam-pal-0213a31a9/",
  },
  {
    name: "Data, AI/ML, Testing and Tools",
    description:
      "SQL Server, T-SQL, stored procedures, MongoDB, ML.NET FastForest, Groq Llama 3.3, Gemini 2.5 Flash, Cypress, Postman, Swagger, Scalar, Git, Agile, and Scrum.",
    link: "Learn more",
    hrefLink : "https://github.com/Rupam0710",
  }
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
              I build secure, cloud-ready full stack products with strong focus
              on delivery quality and performance.
            </h3>
            <button 
            className="btn btn-sm"
            onClick={() => window.open('https://github.com/Rupam0710', '_blank')}
            >See my work
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
                const { name, description, link,hrefLink} = service;
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
                        href={hrefLink}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a 
                      href={hrefLink}
                      target="_blank"
                       className="text-gradient text-sm"
                       >
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
