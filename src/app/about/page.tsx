import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
              <Image
                src="/projects/barathidhasan.png" // Replace with your profile image
                alt="Barathidhasan A"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Barathidhasan A
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Enthusiastic Frontend Developer with 1.5 years of experience
              specializing in building dynamic, responsive, and user-friendly
              web applications using React.js and Next.js.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/Barathi-resume2025.pdf"
                download
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Experience */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Work Experience
              </h3>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">
                  Branding World Digital Marketing Pvt. Ltd - Chennai
                </h4>
                <p className="text-gray-500 mb-2">
                  2024 - Present | Frontend Developer
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>
                    1.5 years of experience in developing responsive and dynamic
                    web applications using React.js
                  </li>
                  <li>
                    Collaborated with backend teams to integrate REST APIs
                  </li>
                  <li>
                    Optimized code for performance, accessibility, and
                    cross-browser compatibility
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-700">
                    Bachelor of Science (B.Sc.)
                  </h4>
                  <p className="text-gray-500">
                    2024 - Present | Azhagappa University
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-700">
                    Diploma in Mechanical Engineering
                  </h4>
                  <p className="text-gray-500">
                    2016 - 2019 | Dhanalakshmi Srinivsan Polytechnic College
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>CSS3, Bootstrap</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Other Skills
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Python, Django (Basic)</li>
                    <li>Git, GitHub</li>
                    <li>REST API Integration</li>
                    <li>Netlify, Vercel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Notable Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">
                    <a
                      href="https://saaskin.com/"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-indigo-600"
                    >
                      Saaskin
                    </a>
                  </h4>
                  <p className="text-gray-600">
                    Next.js project for a medical machines sales company website
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    <a
                      href="https://lms.poshdesk.in/"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-indigo-600"
                    >
                      Posh Learn Module
                    </a>
                  </h4>
                  <p className="text-gray-600">
                    React.js learning management system with user-friendly UI
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    <a
                      href="https://vogelkoparchitects.com/"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-indigo-600"
                    >
                      Vogelkop Architects
                    </a>
                  </h4>
                  <p className="text-gray-600">
                    Portfolio website for an architectural firm
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Personal Details
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Location:</span> Chennai, Tamil
                  Nadu
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  barathidhasan.dev@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> +91 7094861938
                </li>
                <li>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  linkedin.com/in/barathidhasan
                </li>
                <li>
                  <span className="font-medium">Languages:</span> English, Tamil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
