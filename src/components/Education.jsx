import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-[#0B1120]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Education
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#111827] border border-gray-700 rounded-3xl p-10 shadow-xl hover:border-blue-500 transition duration-300"
        >

          {/* Degree */}
          <h3 className="text-3xl font-bold text-blue-400 mb-5">
            PhD Artificial Intelligence Machine Learning
          </h3>

          {/* College */}
          <p className="text-gray-300 text-xl leading-8">
             Stanford University 
          </p>

          {/* Year */}
          <p className="text-purple-400 text-lg mt-5">
            Graduation Year : 2026
          </p>

          {/* CGPA */}
          <p className="text-white text-lg mt-3">
            Score : 10
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;
