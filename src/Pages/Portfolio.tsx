import React, { useState, useEffect } from "react";
import APIData from "../assets/APIData";
// import { Developer } from "@/entities/all";

import HeroSection from "../components/HeroSection";

export default function Portfolio() {
  const [developer, setDeveloper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = async () => {
    try {
      const devData = APIData.Developer

      setDeveloper(devData[0] || null);
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
    </div>
  );
}