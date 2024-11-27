import React from 'react';
import BlogLayout from '../layoutt/index';

const BlogDisplay: React.FC = () => {
  return (
    <div className="flex w-full justify-around flex-wrap mx-auto p-6 space-y-6">
      <BlogLayout
        title="Tired of trying the same food in Indiranagar" 
        description="So, here is a compact weekend guide for all those Indiranagar residents who are bored with the same places to visit. Presenting five restaurants that will give your taste buds a fresh new experience whenever you step out for something different.
      </p>"
        imageUrl="https://placesinindia.com/wp/wp-content/uploads/2017/06/32594873194_d2e5700267_z.jpg"
        link="/blogs/blogtwo" // Link to the detailed blog page
      />
    </div>
  );
};

export default BlogDisplay;
