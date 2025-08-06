import React from 'react';

const otherSolutions = [
  {
    title: 'Project Title 1',
    tech: 'Python, Flask, PostgreSQL, Docker',
    img: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Project+1+Image',
    url: '[YOUR_GITHUB_REPO_URL_1]'
  },
  {
    title: 'Project Title 2',
    tech: 'JavaScript, React, Node.js, MongoDB',
    img: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Project+2+Image',
    url: '[YOUR_GITHUB_REPO_URL_2]'
  },
  {
    title: 'Project Title 3',
    tech: 'Java, Spring Boot, MySQL',
    img: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Project+3+Image',
    url: '[YOUR_GITHUB_REPO_URL_3]'
  }
];

const Solutions = () => (
  <section id="solutions" className="mb-16 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400 border-b-2 border-red-800 dark:border-red-400 pb-2">
      Other Solutions
    </h2>
    <p className="mb-8 leading-relaxed">
      Here are some examples of custom solutions I've implemented. You can find the source code and more details on my GitHub profile.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {otherSolutions.map((sol, idx) => (
        <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700">
          <img src={sol.img} alt={sol.title} className="w-full h-auto object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Technologies: {sol.tech}</p>
          <p className="leading-relaxed mb-4">
            A brief description of {sol.title}. What problem does it solve? What are its key features?
          </p>
          <a href={sol.url} target="_blank" rel="noopener noreferrer" className="inline-block text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600 font-medium">
            View Repository →
          </a>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      Find all my projects on my GitHub profile:
      <a
        href="[YOUR_GITHUB_PROFILE_URL]"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover=text-red-600 font-medium ml-2 inline-flex items-center"
      >
        My GitHub
        <img
          src="https://unpkg.com/lucide-static@latest/icons/github.svg"
          alt="GitHub Logo"
          className="w-5 h-5 ml-1"
        />
      </a>
    </div>
  </section>
);

export default Solutions;
