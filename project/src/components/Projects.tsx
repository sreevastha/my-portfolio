import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { useCursor } from "../contexts/CursorContext";
import speech2textImg from "../assets/speech2text.png";
import genaiTutorImg from "../assets/genai_robotics_tutor.png";
import legalCaseImg from "../assets/legal_case_manager.png";
import fraudDetectionImg from "../assets/fraud_detection.png";
import greensHiveImg from "../assets/greens_hive.png";
import basketballImg from "../assets/basketball_highlight.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  liveUrl?: string;
  image?: string;
};

const Projects = () => {
  const { setCursorVariant } = useCursor();

  const projects: Project[] = [
    {
      title: "SPEECH TO TEXT LANGUAGE TRANSLATION USING DEEP LEARNING",
      description:
        "Developed a system for speech-to-text conversion with automatic language detection and translation. Integrated gTTS for speech synthesis and speech-recognition for real-time voice input.",
      technologies: ["Python", "gTTS", "SpeechRecognition", "LSTM"],
      liveUrl: "",
      githubUrl: "https://github.com/sreevastha/language-translation",
      featured: true,
      image: speech2textImg,
    },
    {
      title: "GENAI ROBOTICS TUTOR",
      description:
        "Fine-tuned DistilGPT2 on a robotics PDF dataset for domain-specific text generation. Implemented RAG with FAISS and Sentence Transformers for context-aware responses. Developed a Flask web app with a modern Tailwind CSS interface.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "FAISS",
        "Flask",
        "Sentence Transformers",
        "NLTK",
        "Docker",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      image: genaiTutorImg,
    },
    {
      title: "LEGAL CASE MANAGER",
      description:
        "Built a legal tech web app combining case management and AI-powered document summarization using RAG. Enabled case upload, filtering, and legal document-based AI query answering.",
      technologies: ["React.js", "Flask", "MongoDB", "RAG"],
      liveUrl: "",
      githubUrl: "https://github.com/G2HackFest/Outliers",
      featured: true,
      image: legalCaseImg,
    },
    {
      title: "ONLINE TRANSACTION FRAUD DETECTION",
      description:
        "Created a classification model to detect online payment fraud using ensemble algorithms.",
      technologies: [
        "Python",
        "Pandas",
        "Random Forest",
        "XGBoost",
        "Scikit-learn",
      ],
      githubUrl: "https://github.com/sreevastha/machine-learning-projects",
      featured: false,
      image: fraudDetectionImg,
    },
    {
      title:
        "GREENS-HIVE : Connecting urban consumers with fresh, organic produce and health-focused meals",
      description:
        "Developed a platform connecting urban users with organic farms and integrated an AI chatbot. Designed backend for managing user data, orders, and farmer profiles securely.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Xmapp", "SQL"],
      githubUrl: "https://github.com/sreevastha/greenhive",
      featured: false,
      image: greensHiveImg,
    },
    {
      title: "REAL-TIME BASKETBALL HIGHLIGHT GENERATOR",
      description:
        "Developed a YOLOv8-based system to detect basketball goals and generate real-time video highlights. Achieved 92.3% detection precision with deployment-ready performance on desktop, mobile, and edge devices.",
      technologies: [
        "Roboflow",
        "PyTorch",
        "OpenCV",
        "TensorFlow Lite",
        "YOLOv8",
      ],
      githubUrl: "",
      featured: false,
      image: basketballImg,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical skills and
            creative problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setCursorVariant("image")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {project.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg text-white hover:bg-gray-900 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <motion.h3
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setCursorVariant("button")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            More Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
                onMouseEnter={() => setCursorVariant("card")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="p-6 space-y-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
