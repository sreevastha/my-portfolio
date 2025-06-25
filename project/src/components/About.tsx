import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";
import profileImg from "../assets/profile.jpeg";

const About = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <img
            src={profileImg}
            alt="Sreevastha Thotamsetty"
            className="rounded-full w-48 h-48 object-cover mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hi, I'm <b>Sreevastha Thotamsetty</b>, an AI/ML enthusiast and
            engineer passionate about building intelligent systems and impactful
            web applications. My journey spans internships and projects in
            computer vision, natural language processing, and generative AI,
            with a strong foundation in computer science and engineering.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My Focus
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>AI/ML solutions for real-world problems</li>
              <li>Computer vision and NLP applications</li>
              <li>Modern web development with React & Flask</li>
              <li>Continuous learning and innovation</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "Python",
                "React.js",
                "Flask",
                "PyTorch",
                "TensorFlow",
                "MongoDB",
                "Docker",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Contact
            </h4>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">
              Allagadda, India
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">
              sreevastha7@gmail.com
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">
              +91 9160128648
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/sreevasthathotamsetty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sreevastha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
