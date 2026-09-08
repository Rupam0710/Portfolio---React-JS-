import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const RESEARCH_SWARM_REPO =
  "https://github.com/Rupam0710/-ResearchSwarm-Multi-Agent-Deep-Research-Engine";
const AI_SKIN_SPECIALIST_REPO = "https://github.com/Rupam0710/AI-Skin-Specialist";
const JOB_HUNTER_AGENT_REPO = "https://github.com/Rupam0710/Job-Hunter-Agent";

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
                Featured projects include multi-agent research systems,
                multimodal AI assistants, and enterprise full stack platforms
                delivered with strong architecture and measurable outcomes.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    window.open("https://github.com/Rupam0710?tab=repositories", "_blank")
                  }
                >
                  View all projects
                </button>
                <button
                  className="btn btn-sm"
                  onClick={() => window.open("https://leetcode.com/u/Rupam0710/", "_blank")}
                >
                  LeetCode profile
                </button>
              </div>
            </div>
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(RESEARCH_SWARM_REPO, "_blank")}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open(RESEARCH_SWARM_REPO, "_blank")}
                src={Img1}
                alt=""
              />
              {/* pretitle  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
                onClick={() => window.open(RESEARCH_SWARM_REPO, "_blank")}
              >
                <span className="text-gradient">
                  Python, FastAPI, LangGraph, LangChain, Groq, React, SSE
                </span>
              </div>
              {/* title  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
                onClick={() => window.open(RESEARCH_SWARM_REPO, "_blank")}
              >
                <span className="text-3xl text-white">ResearchSwarm</span>
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
                onClick={() => window.open(AI_SKIN_SPECIALIST_REPO, "_blank")}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open(AI_SKIN_SPECIALIST_REPO, "_blank")}
                src={Img2}
                alt=""
              />
              {/* pretitle  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
                onClick={() => window.open(AI_SKIN_SPECIALIST_REPO, "_blank")}
              >
                <span className="text-gradient">
                  Python, FastAPI, Gemini Vision, Whisper, Multimodal AI, RAG
                </span>
              </div>
              {/* title  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
                onClick={() => window.open(AI_SKIN_SPECIALIST_REPO, "_blank")}
              >
                <span className="text-3xl text-white">AI Skin Specialist</span>
              </div>
            </div>
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(JOB_HUNTER_AGENT_REPO, "_blank")}
              ></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => window.open(JOB_HUNTER_AGENT_REPO, "_blank")}
                src={Img3}
                alt=""
              />
              {/* pretitle  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 cursor-pointer"
                onClick={() => window.open(JOB_HUNTER_AGENT_REPO, "_blank")}
              >
                <span className="text-gradient">
                  Python, FastAPI, Multi-platform search, Scoring automation
                </span>
              </div>
              {/* title  */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 cursor-pointer"
                onClick={() => window.open(JOB_HUNTER_AGENT_REPO, "_blank")}
              >
                <span className="text-3xl text-white">Job Hunter Agent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
