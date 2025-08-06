export function generateStaticParams() {
  return [
    { name: "my-first-blog-post" },
    { name: "exploring-specific-topic" }
  ];
}

import BlogDetailClient from "./BlogDetailClient";

export default function BlogDetailPage({ params }) {
  return <BlogDetailClient name={params.name} />;
}
