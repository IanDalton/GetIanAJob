"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";

const blogPosts = [
  {
    name: "my-first-blog-post",
    title: "My First Blog Post",
    date: "October 26, 2023",
    image: "https://www.quepasasalta.com.ar/files/image/65/65996/5b0194dd65e31.jpg",
    content:
      "This is a placeholder for my first blog post. Here I might write about a topic I've learned, a project I've worked on, or my thoughts on a specific technology."
  },
  {
    name: "exploring-specific-topic",
    title: "Exploring [Specific Topic]",
    date: "November 10, 2023",
    image: null,
    content:
      "Another placeholder blog post. This one could delve into a specific tool, framework, or concept I've been exploring and found interesting."
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const { name } = params;
  const post = blogPosts.find((p) => p.name === name);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400">Blog Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">Sorry, the blog post you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400">{post.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Published on {post.date}</p>
        {post.image && (
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover mb-4 rounded" />
        )}
        <p className="leading-relaxed mb-8">{post.content}</p>
        <a href="/" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600 font-medium">← Back to Home</a>
      </div>
    </>
  );
}
