"use client";
import { motion } from "framer-motion";

export const experienceData = [
  {
    company: "Dropbox",
    role: "Product Designer",
    date: "August 2019 – Present",
    description: `Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur 
      nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut 
      proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor 
      incididunt amet est occaecat nisi.`,
  },
  {
    company: "Microsoft",
    role: "Frontend Developer",
    date: "August 2016 – July 2019",
    description: `Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur 
      nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut 
      proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor 
      incididunt amet est occaecat nisi.`,
  },
];

export const educationData = [
  {
    institution: "MIT",
    degree: "BSc in Computer Science",
    date: "2012 – 2016",
    description: "Studied computer science fundamentals, algorithms, and UI/UX design.",
  },
  {
    institution: "MIT",
    degree: "BSc in Computer Science",
    date: "2012 – 2016",
    description: "Studied computer science fundamentals, algorithms, and UI/UX design.",
  },
];

export default function ExperienceTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-white relative bottom-40"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Experience Section */}
        <div className="md:w-1/2">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-10">
            Experience
          </h2>
          <div className="relative border-l border-gray-700 ml-4 pl-6">
            {experienceData.map((item, index) => (
              <div key={index} className="relative mb-8">
                <span className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-yellow-500"></span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.company}</h3>
                  <p className="text-md text-gray-300">{item.role}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {item.date}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="md:w-1/2">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-10">
            Education
          </h2>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
          className="relative border-l border-gray-700 ml-4 pl-6">
            {educationData.map((item, index) => (
              <div key={index} className="relative mb-8">
                <span className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-yellow-500"></span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-md text-gray-300">{item.degree}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {item.date}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
