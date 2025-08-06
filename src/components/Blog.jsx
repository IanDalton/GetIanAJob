import React from 'react';

const posts = [
  {
    title: 'My First Blog Post',
    date: 'October 26, 2023',
    image: 'https://www.quepasasalta.com.ar/files/image/65/65996/5b0194dd65e31.jpg',
    excerpt:
      "This is a placeholder for my first blog post. Here I might write about a topic I've learned, a project I've worked on, or my thoughts on a specific technology.",
    url: '#'
  },
  {
    title: 'Exploring [Specific Topic]',
    date: 'November 10, 2023',
    image: null,
    excerpt:
      "Another placeholder blog post. This one could delve into a specific tool, framework, or concept I've been exploring and found interesting.",
    url: '#'
  }
];

const Blog = () => (
  <section id="blog" className="mb-16 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400 border-b-2 border-red-800 dark:border-red-400 pb-2">
      Blog
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700">
          {post.image && <img src={post.image} alt={post.title} className="w-full h-auto object-cover mb-4 rounded" />}
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Published on {post.date}</p>
          <p className="leading-relaxed">{post.excerpt}</p>
          <a href={post.url} className="inline-block text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600 font-medium mt-4">
            Read More →
          </a>
        </div>
      ))}
    </div>
    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">More blog posts will be added soon!</p>
  </section>
);

export default Blog;
