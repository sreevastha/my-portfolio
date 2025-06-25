import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { useCursor } from "../contexts/CursorContext";

const Experience = () => {
  const { setCursorVariant } = useCursor();

  const experiences = [
    {
      type: "internship",
      title: "AI/ML Intern",
      company: "Bytehearts (Remote)",
      location: "Remote",
      duration: "Currently working",
      description: [
        "Developed an AI-based recommendation system.",
        "Tools: AWS, SageMaker, XGBoost, DynamoDB, RESTful APIs.",
      ],
      technologies: ["AWS", "SageMaker", "XGBoost", "DynamoDB", "RESTful APIs"],
    },
    {
      type: "internship",
      title: "Computer Vision Engineer",
      company: "Kriyaitor (Remote)",
      location: "Remote",
      duration: "Dec 2024 – May 2025",
      description: [
        "Developed a YOLOv8-based system to detect basketball goals and generate real-time video highlights.",
        "Achieved 92.3% detection precision with deployment-ready performance on desktop, mobile, and edge devices.",
        "Tools: Roboflow, PyTorch, OpenCV, TensorFlow Lite, YOLOv8.",
      ],
      technologies: [
        "Roboflow",
        "PyTorch",
        "OpenCV",
        "TensorFlow Lite",
        "YOLOv8",
      ],
    },
    {
      type: "internship",
      title: "ML Engineer",
      company: "Edunet Foundation (IBM, AICTE Virtual Internship)",
      location: "Remote",
      duration: "Jan 2024 – Feb 2024",
      description: [
        "Created a classification model to detect online payment fraud using ensemble algorithms.",
        "Addressed data imbalance and evaluated model with F1-score and ROC-AUC metrics.",
        "Tools: Python, Pandas, Random Forest, XGBoost, Scikit-learn, IBM Cloud.",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Random Forest",
        "XGBoost",
        "Scikit-learn",
        "IBM Cloud",
      ],
    },
    {
      type: "education",
      title: "BTech in Computer Science and Engineering",
      company: "Kalasalingam Academy Of Research And Education",
      location: "India",
      duration: "2022 – 2026",
      description: [
        "GPA: 8.29/10",
        "Coursework: Machine Learning, Deep Learning, NLP, Computer Vision.",
      ],
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return BookOpen;
      case "internship":
        return Award;
      default:
        return Award;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-green-500 to-emerald-500";
      case "internship":
        return "from-blue-500 to-purple-500";
      default:
        return "from-orange-500 to-red-500";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and key
            achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:flex items-center justify-center">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${getIconColor(
                        exp.type
                      )} rounded-full flex items-center justify-center`}
                    >
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                      onMouseEnter={() => setCursorVariant("card")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <div className="flex items-center space-x-2 mb-3 md:hidden">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${getIconColor(
                            exp.type
                          )} rounded-full flex items-center justify-center`}
                        >
                          <Icon size={16} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>

                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
