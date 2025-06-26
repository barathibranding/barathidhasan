import React from "react";
import projectsData from "../../data/projects.json";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* New Banner Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My Projects
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                Explore my collection of work and see what I&apos;ve been
                building
              </p>
              <a href="/contact">
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition-all">
                  Get in Touch
                </button>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/skills/developer-3.png" // Replace with your banner image
                  alt="Projects Banner"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project) => (
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
         
        </div>
      </section>
    </div>
  );
};

export default Page;
