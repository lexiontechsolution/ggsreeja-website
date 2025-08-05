import React from "react";
import Image from "../src/assets/image.png"

const AcademicProfileAlt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-5">
    <div className="flex justify-between items-center py-4">
      {/* Clickable name that links to hero section */}
      <div className="flex items-center space-x-3">
        <a href="#" className="group">
          <h1 className="text-2xl font-bold text-gray-900 italic group-hover:text-indigo-600 transition-colors">
            G.G. Sreeja
          </h1>
          <p className="text-xs text-indigo-500 font-mono">Assistant Professor + RESEARCHER</p>
        </a>
      </div>

      {/* Navigation remains the same */}
      <nav className="hidden md:flex items-center space-x-6">
        {['Education', 'Experience', 'Expertise', 'Achievements'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-sm text-gray-700 hover:text-indigo-600 transition-colors group"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute -top-2 -right-2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden flex flex-col space-y-1.5 p-2">
        <span className="w-6 h-0.5 bg-indigo-600"></span>
        <span className="w-4 h-0.5 bg-indigo-600 ml-auto"></span>
        <span className="w-6 h-0.5 bg-indigo-600"></span>
      </button>
    </div>
  </div>
</header>
      {/* Hero Section */}
 <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
  {/* Decorative geometric shapes */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 -skew-x-12 origin-top-right"></div>
  <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-purple-100 opacity-20"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Content - Staff Image with Frame */}
      <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-12">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 blur-md"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
            <img 
              src={Image} 
              alt="Professor teaching computer science"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-xl font-bold text-white">G.G.Sreeja</h3>
              <p className="text-indigo-200">Assistant Professor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Offset Cards */}
      <div className="lg:w-3/5 space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600 transform transition-all hover:-translate-y-2">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg mr-4">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Teaching Philosophy</h3>
              <p className="text-gray-700 mb-4">
                Bridging theory and practice through project-based learning and industry-relevant curriculum development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Active Learning</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Emerging Tech</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Student-Centered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600 lg:ml-12 transform transition-all hover:-translate-y-2">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg mr-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Research Focus</h3>
              <p className="text-gray-700 mb-4">
                Specializing in algorithms optimization and software engineering methodologies with 10+ IEEE publications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">DSA</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Software Eng</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI/ML</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Academic Achievements</h3>
              <p className="text-indigo-100">10+ years shaping future computer scientists</p>
            </div>
            <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-indigo-200">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-indigo-200">Students Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Education Section */}
   <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">Academic Journey</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 transform -translate-x-1/2"></div>
      
      {/* M.E. Degree */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100 relative">
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">M.E. Computer Science</h3>
            <p className="text-indigo-600 font-medium mb-3">Sri Shakthi Institute of Engineering</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">2016</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">With Distinction</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Rank Holder</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
          <div className="h-4 w-4 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
        </div>
        <div className="md:w-1/2 md:pl-12"></div>
      </div>

      {/* B.E. Degree */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12"></div>
        <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
          <div className="h-4 w-4 rounded-full bg-purple-600 border-4 border-white shadow-md"></div>
        </div>
        <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 relative">
            <div className="absolute -top-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">B.E. Computer Science</h3>
            <p className="text-indigo-600 font-medium mb-3">Sri Eshwar College of Engineering</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">2014</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Experience Section */}
   <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
        Professional Journey
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        My academic career path through premier engineering institutions
      </p>
    </div>

    <div className="grid md:grid-cols-12 gap-8">
      {/* Current Position - Gradient Card */}
      <div className="md:col-span-7 lg:col-span-8">
        <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
          
          <div className="flex items-start mb-6">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-3 rounded-lg mr-5 shadow-inner">
              <svg className="h-8 w-8 text-gradient-to-r from-teal-600 to-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Assistant Professor</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-sm font-medium shadow-inner">
                  Current Role
                </span>
              </div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 font-medium mb-1">
                Sri Eshwar College of Engineering
              </p>
              <p className="text-gray-500">2021 - Present | Coimbatore, India</p>
            </div>
          </div>
          <div className="pl-16">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="h-2 w-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                </div>
                <span>Lead instructor for Data Structures & Algorithms courses</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="h-2 w-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                </div>
                <span>Supervised 10+ student research projects published in IEEE conferences</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="h-2 w-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                </div>
                <span>Curriculum committee member for B.Tech CSE program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Previous Position - Gradient Card */}
      <div className="md:col-span-5 lg:col-span-4">
        <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
          
          <div className="flex items-start mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-3 rounded-lg mr-5 shadow-inner">
              <svg className="h-8 w-8 text-gradient-to-r from-purple-600 to-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Teaching Faculty</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-medium mb-1">
                KGiSL Institute of Technology
              </p>
              <p className="text-gray-500">2017 - 2019 | Coimbatore, India</p>
            </div>
          </div>
          <div className="pl-16">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 h-2 w-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Delivered core programming courses (Java, C++)</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-2 w-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Developed innovative lab exercises for DSA courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Gradient Stats Bar */}
    <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="text-white">
          <div className="text-3xl font-bold mb-1">6+</div>
          <div className="text-teal-100 font-medium">Years Experience</div>
        </div>
        <div className="text-white">
          <div className="text-3xl font-bold mb-1">10+</div>
          <div className="text-teal-100 font-medium">Publications</div>
        </div>
        <div className="text-white">
          <div className="text-3xl font-bold mb-1">15+</div>
          <div className="text-teal-100 font-medium">FDPs Attended</div>
        </div>
        <div className="text-white">
          <div className="text-3xl font-bold mb-1">100%</div>
          <div className="text-teal-100 font-medium">Student Satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Areas of Expertise</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Core Competencies - Stacked Cards Design */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Core Competencies</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center p-3 bg-blue-50/50 rounded-lg">
              <div className="bg-white p-1 rounded mr-3 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Problem Solving</span>
            </li>
            <li className="flex items-center p-3 bg-purple-50/50 rounded-lg">
              <div className="bg-white p-1 rounded mr-3 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <span>Data Structures & Algorithms</span>
            </li>
            <li className="flex items-center p-3 bg-indigo-50/50 rounded-lg">
              <div className="bg-white p-1 rounded mr-3 shadow-sm">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              </div>
              <span>Software Engineering</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Languages - Skill Bars Design */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-sm border border-green-100">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Languages</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Java</span>
                <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">C++</span>
                <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">C</span>
                <span className="text-sm text-gray-500">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications - Badge Design */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-100">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-2 rounded-lg mr-4">
              <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-amber-50/50 rounded-lg">
              <div className="bg-white p-1 rounded-full mr-3 shadow-sm border border-amber-200">
                <svg className="h-5 w-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">DSA with C/Java</h4>
                <p className="text-sm text-gray-600">Amphisoft</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-orange-50/50 rounded-lg">
              <div className="bg-white p-1 rounded-full mr-3 shadow-sm border border-orange-200">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Software Engineering</h4>
                <p className="text-sm text-gray-600">IT Industry Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Journey</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Milestones that shaped my career</p>
    </div>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2"></div>
      
      <div className="space-y-12 md:space-y-0">
        {/* Item 1 */}
        <div className="md:flex justify-between items-center w-full">
          <div className="md:w-5/12 md:pr-8 text-right">
            <h3 className="text-xl font-bold text-gray-900">10+ Research Papers</h3>
            <p className="text-gray-600 mt-1">Published in IEEE conferences</p>
          </div>
          <div className="hidden md:block w-2/12 flex justify-center">
            <div className="h-5 w-5 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
          </div>
          <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">Indexed in Scopus and other academic databases</p>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="hidden md:block h-16"></div>
        
        {/* Item 2 */}
        <div className="md:flex justify-between items-center w-full flex-row-reverse">
          <div className="md:w-5/12 md:pl-8 text-left">
            <h3 className="text-xl font-bold text-gray-900">15+ FDPs</h3>
            <p className="text-gray-600 mt-1">Faculty Development Programs</p>
          </div>
          <div className="hidden md:block w-2/12 flex justify-center">
            <div className="h-5 w-5 rounded-full bg-purple-500 ring-4 ring-purple-100"></div>
          </div>
          <div className="md:w-5/12 md:pr-8 mt-4 md:mt-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">Specialized in Machine Learning and Deep Learning</p>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="hidden md:block h-16"></div>
        
        {/* Item 3 */}
        <div className="md:flex justify-between items-center w-full">
          <div className="md:w-5/12 md:pr-8 text-right">
            <h3 className="text-xl font-bold text-gray-900">Resource Person</h3>
            <p className="text-gray-600 mt-1">Invited speaker</p>
          </div>
          <div className="hidden md:block w-2/12 flex justify-center">
            <div className="h-5 w-5 rounded-full bg-indigo-500 ring-4 ring-indigo-100"></div>
          </div>
          <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">At Nanjiah Lingammal Polytechnic College</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
     <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Connect</h2>
      <p className="text-gray-600">I'm always open to discussing new projects or research opportunities</p>
    </div>
    
    <div className="bg-white p-8 rounded-2xl shadow-md border border-indigo-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">EMAIL</h4>
              <a href="mailto:sreeja.cse@example.edu" className="text-indigo-600 hover:text-indigo-800">sreeja.gg@sece.ac.in</a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">INSTITUTION</h4>
              <p className="text-gray-900">Sri Eshwar College of Engineering</p>
              <p className="text-gray-600">Department of Computer Science</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-500 mb-3">SOCIAL PROFILES</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sreeja-gopakumar-89790876/" className="text-indigo-600 hover:text-indigo-800">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <span className="sr-only">Google Scholar</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                </svg>
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <span className="sr-only">ResearchGate</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 18H8v-8h2zm1 0v-8h2v8zm-1-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Message</h3>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const name = e.currentTarget.elements.namedItem('name').value;
            const email = e.currentTarget.elements.namedItem('email').value;
            const message = e.currentTarget.elements.namedItem('message').value;
            
            const whatsappUrl = `https://wa.me/9500965894?text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}>
            <div>
              <input name="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <input name="email" type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <textarea name="message" rows={4} placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
              Send Message 
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-lg font-bold mb-4">G.G. Sreeja</h3>
      <p className="text-gray-400">Computer Science Educator & Researcher with expertise in Machine Learning and Data Science.</p>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Publications</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teaching Portfolio</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Services</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-4">Connect</h3>
      <div className="flex space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/sreeja-gopakumar-89790876/" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 18H8v-8h2zm1 0v-8h2v8zm-1-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
        </a>
      </div>
      <a href="mailto:sreeja.cse@example.edu" className="text-gray-400 hover:text-white transition-colors text-sm">sreeja.gg@sece.ac.in</a>
    </div>
  </div>
  
  <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
    <p className="text-gray-500 text-sm text-center">
      &copy; {new Date().getFullYear()} G.G. Sreeja. All rights reserved. 
      <span className="ml-2">
        Design by <a href="https://lexiontech.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LexionTech</a>
      </span>
    </p>
  </div>
</footer>
    </div>
  );
};

export default AcademicProfileAlt;
