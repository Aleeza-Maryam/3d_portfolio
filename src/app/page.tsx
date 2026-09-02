export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-[#00d4ff] font-mono text-sm md:text-base mb-4 tracking-wider">
            &lt; WELCOME TO MY DIGITAL SPACE /&gt;
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] glow-text">
              Aleeza Maryam
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-2xl mx-auto">
            Computer Science Undergraduate
          </p>
          <p className="text-lg text-[#7c3aed] mb-6 max-w-2xl mx-auto">
            Data Analyst &amp; Python Developer | AI &amp; Data Science Enthusiast
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="px-4 py-2 text-sm border border-[#00d4ff]/20 rounded-full text-[#00d4ff]">
              #DataScience
            </span>
            <span className="px-4 py-2 text-sm border border-[#7c3aed]/20 rounded-full text-[#7c3aed]">
              #MachineLearning
            </span>
            <span className="px-4 py-2 text-sm border border-[#ec4899]/20 rounded-full text-[#ec4899]">
              #Python
            </span>
            <span className="px-4 py-2 text-sm border border-[#00d4ff]/20 rounded-full text-[#00d4ff]">
              #SQL
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-medium rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#00d4ff]/20"
            >
              View My Work
            </a>
            <a
              href="/resume/AleezaMaryam_Resume.pdf"
              target="_blank"
              className="px-8 py-3 border border-[#00d4ff]/30 text-white font-medium rounded-full hover:bg-[#00d4ff]/10 transition-all glow-border"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://github.com/Aleeza-Maryam"
              target="_blank"
              className="text-gray-400 hover:text-[#00d4ff] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aleeza-maryam-60b6622a9/"
              target="_blank"
              className="text-gray-400 hover:text-[#00d4ff] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-[#00d4ff]/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#00d4ff] rounded-full mt-2 animate-pulse" />
            </div>
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
    </>
  );
}