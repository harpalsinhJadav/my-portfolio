import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", href: "#about", type: "scroll" },
    { name: "Education", href: "#education", type: "scroll" },
    { name: "Experience", href: "#experience", type: "scroll" },
    { name: "Projects", href: "#projects", type: "scroll" },
    { name: "Skills", href: "#skills", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
    { name: "Resume", href: "Resume", type: "page" },
  ];

  const scrollToSection = (href) => {
    // If not on the main page, navigate first, then scroll
    if (location.pathname !== createPageUrl('Portfolio')) {
      window.location.href = `${createPageUrl('Portfolio')}${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const NavItem = ({ item }) => {
    if (item.type === "page") {
      const pageUrl = createPageUrl(item.href);
      const isActive = location.pathname === pageUrl;
      return (
        <Link
          to={pageUrl}
          onClick={() => setIsMenuOpen(false)}
          className={`text-slate-600 hover:text-amber-500 transition-colors duration-300 font-medium ${
            isActive ? "text-amber-500" : ""
          }`}
        >
          {item.name}
        </Link>
      );
    }
    return (
      <button
        onClick={() => scrollToSection(item.href)}
        className="text-slate-600 hover:text-amber-500 transition-colors duration-300 font-medium"
      >
        {item.name}
      </button>
    );
  };

  const MobileNavItem = ({ item }) => {
     if (item.type === "page") {
      const pageUrl = createPageUrl(item.href);
      const isActive = location.pathname === pageUrl;
      return (
        <Link
          to={pageUrl}
          onClick={() => setIsMenuOpen(false)}
          className={`text-left px-4 py-2 text-slate-600 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-all duration-300 ${
            isActive ? "bg-amber-50 text-amber-600" : ""
          }`}
        >
          {item.name}
        </Link>
      );
    }
    return (
       <button
        onClick={() => scrollToSection(item.href)}
        className="text-left px-4 py-2 text-slate-600 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-all duration-300"
      >
        {item.name}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <style>
        {`
          :root {
            --primary-navy: #0F172A;
            --secondary-gray: #64748B;
            --accent-gold: #F59E0B;
            --light-bg: #FAFAFA;
            --white: #FFFFFF;
          }
          
          * {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            line-height: 1.6;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #0F172A 0%, #374151 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .floating-animation {
            animation: floating 3s ease-in-out infinite;
          }
          
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to={createPageUrl("Portfolio")} className="text-2xl font-bold gradient-text">
              Portfolio
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <MobileNavItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
