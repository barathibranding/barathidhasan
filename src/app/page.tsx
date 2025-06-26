import Image from "next/image";
import Link from "next/link";
import projectsData from "../data/projects.json";
import Getintouch from "./Components/Getintouch";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Barathidhasan
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600">
                Front-end developer building digital experiences
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                I create beautiful, functional websites and applications with a
                focus on user experience and clean code.
              </p>
              <div className="flex gap-4 pt-4 flex-wrap">
                <a
                  href="/project"
                  className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 transition-colors"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 transition-colors"
                >
                  Contact Me
                </a>
                <Link
                  href="/about"
                  className="rounded-full bg-white text-gray-700 hover:bg-gray-100 font-medium px-6 py-3 transition-colors shadow-sm"
                >
                  About Me →
                </Link>
                {/* Add Download Resume Button */}
                <Link
                  href="/Barathi-resume2025.pdf"
                  target="_blank"
                  download="Barathi-Dhasan-Resume.pdf"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 font-medium px-6 py-3 transition-colors shadow-md hover:shadow-lg"
                >
                  Download Resume
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/skills/developer.png"
                alt="Your profile or work illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
              {/* Image - shown first on mobile */}
              <div className="relative h-64 w-full md:h-80 rounded-xl overflow-hidden  order-1 md:order-2">
                <Image
                  src="/skills/developer-2.jpg"
                  alt="Barathidhasan working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text content - shown second on mobile */}
              <div className="space-y-6 order-2 md:order-1">
                <p className="text-lg text-gray-600">
                  Enthusiastic Frontend Developer with 1.5 years of experience
                  specializing in building dynamic, responsive, and
                  user-friendly web applications using React.js and Next.js.
                </p>
                <p className="text-lg text-gray-600">
                  Skilled in implementing clean and maintainable code with a
                  strong focus on UI/UX. Proficient in Next.js for server-side
                  rendering and creating seamless user experiences.
                </p>
                <p className="text-lg text-gray-600">
                  Have foundational knowledge in Python and Django, enabling
                  effective collaboration with backend teams.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium mt-4"
                >
                  More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Frontend Developer
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      Branding World Digital Marketing Pvt. Ltd - Chennai
                    </p>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    2024 - Present
                  </div>
                </div>
                <ul className="mt-6 space-y-3 list-disc pl-5 text-gray-600">
                  <li>
                    1.5 years of experience in developing responsive and dynamic
                    web applications using React.js
                  </li>
                  <li>
                    Collaborated with backend teams to integrate REST APIs and
                    ensure seamless functionality
                  </li>
                  <li>
                    Optimized code for performance, accessibility, and
                    cross-browser compatibility
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      UI Development Training
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      Fita Academy - Anna Nagar, Chennai
                    </p>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    2023 - 2024
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  Completed professional training in UI development with
                  React.js, gaining hands-on experience in building modern web
                  applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                "Next.js",
                "React",
                "Python Django",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "Figma",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src={`/skills/${skill.toLowerCase()}.svg`}
                      alt={skill}
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                "Next.js",
                "React",
                "Python",
                "Django",
                "TypeScript",
                "JavaScript",
                "TailwindCSS",
                "Node.js",
                "Figma",
                "GitHub",
                "HTML",
                "CSS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src={`/skills/${skill.toLowerCase()}.svg`}
                      alt={skill}
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.projects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-indigo-600 hover:underline font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/project"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        <Getintouch />
      </main>
    </div>
  );
}
