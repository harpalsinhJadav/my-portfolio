import React, { useState, useEffect } from "react";
import APIData from "../assets/APIData";

import HeroSection from "../components/HeroSection";
import AboutSection from  "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Portfolio() {
  const [developer, setDeveloper] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = async () => {
    try {
      const devData = APIData.Developer;
      const eduData = APIData.Education;
      const expData = APIData.Experience;
      const projData = APIData.Projects;
      const skillData = APIData.Skills;

      setDeveloper(devData[0] || null);
      setEducation(eduData);
      setExperience(expData);
      setProjects(projData);
      setSkills(skillData);
    } catch (error) {
      console.error("Error loading portfolio data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection developer={developer} />
      <AboutSection developer={developer} />
      <EducationSection educationList={education} />
      <ExperienceSection experienceList={experience} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
    </div>
  );
}