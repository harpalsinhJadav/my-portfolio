import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import type { Developer } from "@/types";

interface ContactSectionProps {
  developer?: Developer | null;
}

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value?: string;
  link?: string;
  color: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url?: string;
  color: string;
}

export default function ContactSection({ developer }: ContactSectionProps) {
  if (!developer) return null;

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      label: "Email",
      value: developer.email,
      link: developer.email ? `mailto:${developer.email}` : undefined,
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: developer.phone,
      link: developer.phone ? `tel:${developer.phone}` : undefined,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: developer.location,
      color: "bg-blue-100 text-blue-600",
    },
  ].filter((method) => method.value);

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      label: "GitHub",
      url: developer.github_url,
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: developer.linkedin_url,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: Globe,
      label: "Website",
      url: developer.website_url,
      color: "hover:bg-amber-500 hover:text-white",
    },
  ].filter((link) => link.url);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your next project or explore opportunities? I'd
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities,
                whether that's a permanent role, contract work, or just a
                friendly chat about React Native.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const ContactComponent = method.link ? "a" : "div";
                const linkProps = method.link
                  ? {
                      href: method.link,
                      className: "group cursor-pointer",
                    }
                  : { className: "group" };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ContactComponent {...linkProps}>
                      <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 group-hover:border-amber-500/50">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium">
                            {method.label}
                          </p>
                          <p className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                            {method.value}
                          </p>
                        </div>
                        {method.link && (
                          <ExternalLink className="w-4 h-4 ml-auto text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
                        )}
                      </div>
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
                className="pt-8"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} group`}
                    >
                      <social.icon className="w-5 h-5 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
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
            <div className="relative w-full h-96 bg-gradient-to-br from-amber-500/20 to-slate-700/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-amber-400/30 rounded-full floating-animation"></div>
              <div
                className="absolute bottom-12 left-8 w-12 h-12 bg-white/20 rounded-full floating-animation"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-500/20 rounded-full floating-animation"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Contact CTA */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Ready to Start?
                  </h4>
                  <p className="text-slate-300">
                    Let's build something amazing together
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center pt-16 mt-16 border-t border-slate-700"
        >
          <p className="text-slate-400">
            © 2025 {developer.full_name}. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
