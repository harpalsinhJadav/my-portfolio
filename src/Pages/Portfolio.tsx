import React, { useState, useEffect } from "react";
import APIData from "../assets/APIData";

import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import EducationSection from "../Components/EducationSection";
import ExperienceSection from "../Components/ExperienceSection";
import ProjectsSection from "../Components/ProjectsSection";
import SkillsSection from "../Components/SkillsSection";
import ContactSection from "../Components/ContactSection";

import type { Developer,Education, Experience, Project, Skill } from "@/types";

export default function Portfolio() {
  const [developer, setDeveloper] = useState<Developer | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = () => {
    try {
      const devData = APIData.Developer as Developer[];
      const eduData = APIData.Education as Education[];
      const expData = APIData.Experience as Experience[];
      const projData = APIData.Projects as Project[];
      const skillData = APIData.Skills as Skill[];

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
      <ContactSection developer={developer} />
    </div>
  );
}
