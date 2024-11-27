import React from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string; // Add link prop
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Link href={link}>
      <div className="border w-[400px] rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg transition cursor-pointer">
        {/* Image Section */}
        <div className="">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col w-full md:w-2/3">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogLayout;
