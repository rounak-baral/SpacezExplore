import React from 'react';
import { Footer } from '../../components/Footer';

const BlogDisplay1: React.FC = () => {
  return (
    <>
    <div className="flex flex-col max-w-[70%] justify-center mx-auto p-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Celebrate Diwaloween at Spacez: A Unique Festive Fusion!
      </h1>

      {/* Hero Image */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://zomatoblog.com/wp-content/uploads/2024/11/Burma-Burma-changes.png"
        alt="Diwaloween at Spacez"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        This October and early November, Spacez is excited to present a one-of-a-kind
        experience for our guests—Diwaloween! Imagine the sparkle of Diwali lights
        combined with Halloween’s playful spookiness, creating an enchanting atmosphere
        that feels both festive and unique. Here’s what makes Spacez the ultimate choice
        for a memorable stay this festive season.
      </p>

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        🎃🪔 What to Expect: Diwali Meets Halloween at Spacez 🎃🪔
      </h2>

      {/* Subsection Image */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://zomatoblog.com/wp-content/uploads/2024/11/Burma-Burma-changes.png"
        alt="Diwaloween at Spacez"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>

      {/* Subsection Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        For the last week of October and first week of November, every Spacez property
        is getting a festive makeover! Guests can enjoy a fusion of Diwali’s warm
        lights and traditional rangolis alongside Halloween’s pumpkins, subtle spooky
        decor, and themed lighting. The result? A visually stunning space that celebrates
        both festivals in perfect harmony.
      </p>

      {/* Customization Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Customized Experiences for Groups and Corporate Guests
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Planning a group getaway or a corporate retreat this season? Spacez has you
        covered. Our Diwaloween experience extends beyond decor with customizations
        designed to make your stay exactly as you envision it.
      </p>

     
    </div>
    <Footer />
    </>
  );
};

export default BlogDisplay1;
