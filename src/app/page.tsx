"use client";

import { useState } from "react";

import Particles from "../components/3d/Particles";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const projects = [
    {
      title: "FlyRank Content Opportunity Scoring",
      description:
        "ML and data analytics project analyzing content performance data to identify and rank content opportunities for refresh and optimization.",
      tech: ["Python", "DuckDB", "Pandas", "Scikit-learn", "Hugging Face"],
      github: "https://github.com/Aleeza-Maryam/Aleeza-ML-Internship-WEEK1",
      color: "#00d4ff",
    },
    {
      title: "HealthMate - AI Symptom Checker",
      description:
        "Android app for preliminary health assessment using TensorFlow Lite. Predicts diseases from symptoms with confidence scores.",
      tech: ["Python", "TensorFlow", "Android", "Kotlin", "ML"],
      github: "https://github.com/Aleeza-Maryam/HealthMate",
      color: "#7c3aed",
    },
    {
      title: "TradeBot - Trading Simulator",
      description:
        "Console-based trading simulator using MongoDB for portfolio management. Containerized with Docker for consistent environment.",
      tech: ["Python", "MongoDB", "Docker", "CLI"],
      github: "https://github.com/Aleeza-Maryam/TradeBott",
      color: "#ec4899",
    },
    {
      title: "AI Interview Coach Platform",
      description:
        "Web platform that generates interview questions and evaluates answers via text/speech with dynamic follow-up questions.",
      tech: ["React", "Node.js", "AI/ML", "Speech-to-Text"],
      github: "https://github.com/Aleeza-Maryam/AI-Interview-Coach-Platform-Web-Engineering-Project",
      color: "#f59e0b",
    },
    {
      title: "Ride-Sharing SQL Analytics",
      description:
        "Relational database system managing ride-sharing data including passengers, drivers, rides, payments, and ratings.",
      tech: ["SQL", "Database Design", "Data Analytics"],
      github: "https://github.com/Aleeza-Maryam/Ride-Sharing-SQL-Analytics",
      color: "#10b981",
    },
    {
      title: "Woolley Wonders - Crochet Website",
      description:
        "Small business e-commerce website for handcrafted crochet products with a modern, user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript", "Web Design"],
      github: "https://github.com/Aleeza-Maryam/woolley-wonders",
      color: "#f472b6",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // This will work when you add the API route later
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
   
            {/* Hero Section */}
            {/* Hero Section */}
          {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#3b82f6] font-mono text-sm mb-4 tracking-wider">
                &lt; WELCOME TO MY DIGITAL SPACE /&gt;
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 whitespace-nowrap">
                <span className="text-white">I'm </span>
                <span className="text-gradient">Aleeza Maryam</span>
              </h1>

              <p className="text-xl text-[#94a3b8] mb-1">
                Computer Science Undergraduate
              </p>
              <p className="text-lg text-[#3b82f6] mb-1">
                Data Analyst &amp; Python Developer
              </p>
              <p className="text-lg text-[#8b5cf6] mb-6">
                AI &amp; Data Science Enthusiast
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                <span className="px-4 py-2 text-sm border border-[#3b82f6]/20 rounded-full text-[#3b82f6]">
                  #DataScience
                </span>
                <span className="px-4 py-2 text-sm border border-[#8b5cf6]/20 rounded-full text-[#8b5cf6]">
                  #MachineLearning
                </span>
                <span className="px-4 py-2 text-sm border border-[#3b82f6]/20 rounded-full text-[#3b82f6]">
                  #Python
                </span>
                <span className="px-4 py-2 text-sm border border-[#94a3b8]/20 rounded-full text-[#94a3b8]">
                  #SQL
                </span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a
                  href="/resume/AleezaMaryam_Resume.pdf"
                  target="_blank"
                  className="btn-secondary"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center md:justify-start mt-8">
                <a
                  href="https://github.com/Aleeza-Maryam"
                  target="_blank"
                  className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aleeza-maryam-60b6622a9/"
                  target="_blank"
                  className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Professional Photo */}
           {/* Right - Professional Photo */}
<div className="flex-1 flex justify-center">
  <div className="relative">
    <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#3b82f6]/30 shadow-2xl shadow-[#3b82f6]/20 hover:border-[#3b82f6]/60 transition-all duration-300">
      <img
        src="/profile.jpg"
        alt="Aleeza Maryam"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Decorative glow rings */}
    <div className="absolute -inset-4 bg-[#3b82f6]/5 blur-2xl rounded-full -z-10 animate-pulse" />
    <div className="absolute -inset-8 border border-[#3b82f6]/10 rounded-full -z-20" />
  </div>
</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#3b82f6]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#3b82f6] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-[#00d4ff]">About</span>{" "}
            <span className="text-white">Me</span>
          </h2>

          <div className="glass rounded-2xl p-6 md:p-8 glow-border">
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a <span className="text-[#00d4ff]">Computer Science undergraduate</span> at Institute
              of Space Technology – KICSIT, currently in my 7th semester with a CGPA of{" "}
              <span className="text-[#7c3aed] font-bold">3.48/4.00</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              My passion lies at the intersection of <span className="text-[#00d4ff]">Data Science</span>,{" "}
              <span className="text-[#7c3aed]">Machine Learning</span>, and{" "}
              <span className="text-[#ec4899]">Python development</span>. I love transforming raw data
              into actionable insights and building intelligent systems that solve real-world problems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Recently, I completed a <span className="text-[#00d4ff]">Machine Learning Internship at FlyRank</span>,
              where I worked on content opportunity scoring using Python, DuckDB, and Scikit-learn.
              I'm actively seeking <span className="text-[#7c3aed]">Data Analytics</span> and{" "}
              <span className="text-[#ec4899]">AI/ML</span> roles where I can make an impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/10">
                <div className="text-2xl font-bold text-[#00d4ff]">3.48</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#7c3aed]/5 border border-[#7c3aed]/10">
                <div className="text-2xl font-bold text-[#7c3aed]">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                <div className="text-2xl font-bold text-[#ec4899]">2</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/10">
                <div className="text-2xl font-bold text-[#00d4ff]">4</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#7c3aed]">My</span>{" "}
          <span className="text-white">Tech Stack</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies I work with to build data-driven solutions and intelligent systems
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Python", color: "#3776AB" },
            { name: "SQL", color: "#4479A1" },
            { name: "Pandas", color: "#150458" },
            { name: "NumPy", color: "#013243" },
            { name: "Scikit-learn", color: "#F7931E" },
            { name: "Power BI", color: "#F2C811" },
            { name: "MySQL", color: "#4479A1" },
            { name: "MongoDB", color: "#47A248" },
            { name: "React", color: "#61DAFB" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Git", color: "#F05032" },
            { name: "Docker", color: "#2496ED" },
            { name: "C++", color: "#00599C" },
            { name: "HTML", color: "#E34F26" },
            { name: "CSS", color: "#1572B6" },
            { name: "Hugging Face", color: "#FFD21E" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-4 text-center glow-border hover:scale-105 transition-transform cursor-default group"
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-2"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                  border: `1px solid ${skill.color}44`,
                }}
              >
                <span style={{ color: skill.color }}>
                  {skill.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#00d4ff]">Featured</span>{" "}
          <span className="text-white">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of my work in Data Science, AI/ML, and Web Development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 glow-border hover:shadow-xl hover:shadow-[#00d4ff]/5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-sm text-gray-400 hover:text-[#00d4ff] transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#ec4899]">Experience</span>{" "}
          <span className="text-white">&amp; Education</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My journey in Computer Science, Data Science, and AI/ML
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Experience 1: FlyRank */}
          <div className="glass rounded-2xl p-6 md:p-8 glow-border hover:border-[#00d4ff]/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Machine Learning Intern</h3>
                <p className="text-[#00d4ff] font-medium">FlyRank</p>
                <p className="text-gray-400 text-sm">Remote • July 2026 – September 2026</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 rounded-full whitespace-nowrap">
                Internship
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-1">▸</span>
                Built ML models for content opportunity scoring using Python, DuckDB, and Scikit-learn
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-1">▸</span>
                Analyzed large-scale content performance data to identify optimization opportunities
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-1">▸</span>
                Collaborated with cross-functional teams using agile development practices
              </li>
            </ul>
          </div>

          {/* Experience 2: Remote Internship Programs */}
          <div className="glass rounded-2xl p-6 md:p-8 glow-border hover:border-[#7c3aed]/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Web Development & AI/ML Intern</h3>
                <p className="text-[#7c3aed] font-medium">Remote Internship Programs</p>
                <p className="text-gray-400 text-sm">Remote • 2024 – 2025</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 rounded-full whitespace-nowrap">
                Internship
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-1">▸</span>
                Built responsive web applications using HTML, CSS, JavaScript, and React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-1">▸</span>
                Developed and evaluated ML models for classification and predictive analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-1">▸</span>
                Collaborated in remote teams using agile development practices
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="glass rounded-2xl p-6 md:p-8 glow-border hover:border-[#ec4899]/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-[#ec4899] font-medium">Institute of Space Technology – KICSIT</p>
                <p className="text-gray-400 text-sm">Expected July 2027 • 7th Semester</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-medium bg-[#ec4899]/10 text-[#ec4899] border border-[#ec4899]/20 rounded-full">
                  CGPA: 3.48/4.00
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Relevant Courses:</p>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "Database Design", "Machine Learning", "Data Science"].map((course) => (
                  <span key={course} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#00d4ff]">Get In</span>{" "}
          <span className="text-white">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a question, opportunity, or just want to connect? I'd love to hear from you!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8 glow-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-[#00d4ff]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                  placeholder="Aleeza Maryam"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-[#00d4ff]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                  placeholder="aleeza@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 border border-[#00d4ff]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-medium rounded-lg hover:scale-[1.02] transition-all shadow-lg shadow-[#00d4ff]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg text-[#00d4ff] text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-lg text-[#ec4899] text-center">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>

            {/* Direct Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-center text-gray-400 text-sm">
                Or reach me directly at:{" "}
                <a
                  href="mailto:aleezamarryam563@gmail.com"
                  className="text-[#00d4ff] hover:text-[#7c3aed] transition-colors"
                >
                  aleezamarryam563@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}