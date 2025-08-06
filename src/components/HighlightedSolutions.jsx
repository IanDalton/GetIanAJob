import React from 'react';

const solutions = [
  { title: 'Project Title 1', url: '[YOUR_GITHUB_REPO_URL_1]' },
  { title: 'Project Title 2', url: '[YOUR_GITHUB_REPO_URL_2]' },
  { title: 'Project Title 3', url: '[YOUR_GITHUB_REPO_URL_3]' }
];

const HighlightedSolutions = () => (
  <section id="quick-access-solutions" className="mb-16 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400 border-b-2 border-red-800 dark:border-red-400 pb-2">
      Highlighted Solutions
    </h2>
    <p className="mb-8 leading-relaxed">Check out some of my key projects below:</p>
    <div className="flex justify-around items-center gap-4">
      {solutions.map((sol, idx) => (
        <a
          key={idx}
          href={sol.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded text-sm transition duration-300 dark:bg-red-400 dark:hover:bg-red-600"
        >
          {sol.title}
        </a>
      ))}
    </div>
    <div className="mt-12 text-center">
      Find all my projects on my GitHub profile:
      <a
        href="[YOUR_GITHUB_PROFILE_URL]"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600 font-medium ml-2 inline-flex items-center"
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

export default HighlightedSolutions;
