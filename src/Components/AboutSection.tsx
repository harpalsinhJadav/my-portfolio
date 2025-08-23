import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Developer } from "@/types";

interface AboutSectionProps {
  developer: Developer | null;
}

export default function AboutSection({ developer }: AboutSectionProps) {
  if (!developer) return null;

  const contactItems: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value?: string;
    link?: string;
  }[] = [
    { icon: MapPin, label: "Location", value: developer.location },
    {
      icon: Mail,
      label: "Email",
      value: developer.email,
      link: developer.email ? `mailto:${developer.email}` : undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      value: developer.phone,
      link: developer.phone ? `tel:${developer.phone}` : undefined,
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: developer.linkedin_url },
    { name: "GitHub", url: developer.github_url },
    { name: "Website", url: developer.website_url },
  ].filter((link) => link.url) as { name: string; url: string }[];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-slate-600">
              <p className="text-xl leading-relaxed">{developer.bio}</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                if (!item.value) return null;

                const ContactComponent = item.link ? "a" : "div";
                const linkProps = item.link
                  ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ContactComponent
                      {...linkProps}
                      className="flex items-center gap-4 text-slate-600 hover:text-amber-500 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold">{item.value}</p>
                      </div>
                      {item.link && (
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </ContactComponent>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-amber-500 hover:text-white rounded-lg transition-all duration-300 font-medium"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 to-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-slate-900/10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-amber-400 rounded-full opacity-20 floating-animation"></div>
              <div
                className="absolute bottom-12 left-8 w-12 h-12 bg-slate-400 rounded-full opacity-30 floating-animation"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 rounded-full opacity-15 floating-animation"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
