import React from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string; 
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, description, imageUrl, link }) => {
  // Truncate description to 150 characters with ellipsis
  const truncateDescription = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
      <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px] smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
        <Link href={link}>
          <img
            src={imageUrl}
            alt={title}
            className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-white mt-2">{truncateDescription(description, 100)}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogLayout;
