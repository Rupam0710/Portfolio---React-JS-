import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jlf75yx", "template_sfle5nk", form.current, {
        publicKey: "pdVkQI9-NcIY8bZ_F",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!!
              </h2>
              <div className="space-y-3 font-secondary">
                <p>
                  Email: <span className="text-accent">rupampalofficial48@gmail.com</span>
                </p>
                <p>
                  Phone: <span className="text-accent">+91 9830751540</span>
                </p>
                <p>
                  <a
                    href="https://github.com/Rupam0710"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    GitHub Overview
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/rupam-pal-0213a31a9/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p>
                  <a
                    href="https://leetcode.com/u/Rupam0710/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    LeetCode Profile
                  </a>
                </p>
                <p>
                  <a
                    href="https://takeuforward.org/profile/rupam_0710"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient"
                  >
                    TakeUForward Profile
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          {/* form  */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="from_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="from_email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
