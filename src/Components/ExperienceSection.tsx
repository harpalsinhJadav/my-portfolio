import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection({ experienceList }) {
  if (!experienceList || experienceList.length === 0) return null;

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-amber-200"></div>

          <div className="space-y-12">
            {experienceList.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                  experience.is_current ? 'bg-green-500 animate-pulse' : 'bg-amber-500'
                }`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-effect rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    {/* Date Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${
                      experience.is_current ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    } rounded-full text-sm font-semibold mb-4 ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <Calendar className="w-4 h-4" />
                      {format(new Date(experience.start_date), "MMM yyyy")} - {
                        experience.is_current ? "Present" : format(new Date(experience.end_date), "MMM yyyy")
                      }
                    </div>

                    {/* Company & Position */}
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-slate-900">
                        {experience.company}
                      </h3>
                    </div>

                    <h4 className="text-xl font-semibold text-slate-700 mb-4">
                      {experience.position}
                    </h4>

                    {/* Location */}
                    {experience.location && (
                      <div className="flex items-center gap-2 text-slate-600 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-800 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
