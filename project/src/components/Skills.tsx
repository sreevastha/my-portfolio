import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";

const Skills = () => {
  const { setCursorVariant } = useCursor();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 70 },
        { name: "Python", level: 90 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 85 },
      ],
    },
    {
      title: "AI/ML/DL",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Hugging Face Transformers", level: 75 },
        { name: "OpenCV", level: 80 },
        { name: "PyTorch", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 85 },
        { name: "GenAI", level: 70 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "Bootstrap", level: 70 },
        { name: "React.js", level: 85 },
        { name: "Framer Motion", level: 70 },
        { name: "Flask", level: 80 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 65 },
        { name: "Git/GitHub", level: 90 },
        { name: "Dialogflow", level: 60 },
        { name: "Roboflow", level: 70 },
        { name: "Langchain", level: 60 },
        { name: "Docker", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setCursorVariant("card")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Additional Expertise
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SpeechRecognition",
              "LSTM",
              "FAISS",
              "Sentence Transformers",
              "NLTK",
              "AWS",
              "SageMaker",
              "XGBoost",
              "DynamoDB",
              "Restful APIs",
              "IBM Cloud",
              "Pandas",
              "Random Forest",
              "Scikit-learn",
              "gTTS",
              "Jupyter Notebooks",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-all duration-200 hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
