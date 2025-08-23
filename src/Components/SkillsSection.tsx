import React from "react";
import { motion } from "framer-motion";
import { Code, Wrench, Users, Lightbulb, Server, BarChart2 } from "lucide-react";
import type { Skill } from "@/types";

type SkillsSectionProps = {
  skills: Skill[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null;

  // Updated icons for new categories
  const categoryIcons: Record<string, React.ElementType> = {    
    "programming": Code,
    "core_frameworks_&_libraries": Server,
    "state_management_&_data_handling": Wrench,
    "ui_&_styling": Lightbulb,
    "backend,_api_&_data_integration": Server,
    "testing_&_quality_assurance": Wrench,
    "build,_deployment_&_devops": Wrench,
    "analytics_&_monitoring": BarChart2,
    "soft_skills_&_leadership": Users,
    other: Lightbulb,
  };

  // Updated colors for new categories
  const categoryColors: Record<string, string> = {
    "programming": "bg-blue-100 text-blue-800",
    "core_frameworks_&_libraries": "bg-green-100 text-green-800",
    "state_management_&_data_handling": "bg-purple-100 text-purple-800",
    "ui_&_styling": "bg-pink-100 text-pink-800",
    "backend,_api_&_data_integration": "bg-teal-100 text-teal-800",
    "testing_&_quality_assurance": "bg-yellow-100 text-yellow-800",
    "build,_deployment_&_devops": "bg-orange-100 text-orange-800",
    "analytics_&_monitoring": "bg-red-100 text-red-800",
    "soft_skills_&_leadership": "bg-indigo-100 text-indigo-800",
    "other": "bg-gray-100 text-gray-800",
  };

  // Group skills by category
  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-slate-800">{skill.name}</h4>
        <span className="text-sm text-slate-500">
          {skill.years_experience && `${skill.years_experience}yr`}
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <motion.div
          className="bg-amber-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.proficiency_level / 5) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
            const IconComponent = categoryIcons[category] || Lightbulb;
            const colorClass = categoryColors[category] || "bg-gray-100 text-gray-800";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 capitalize">
                    {category.replace(/_/g, " ")}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.id} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
