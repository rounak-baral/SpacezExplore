import React from 'react';
import { Footer } from '../../components/Footer';

const BlogDisplay2: React.FC = () => {
  return (
    <>
    <div className="flex flex-col max-w-[70%] justify-center mx-auto p-6">
      {/* Main Title */}
      <h1 className="text-[56px] mobile:text-2xl font-extrabold text-center text-gray-800 mb-8">
      Tired of trying the same food in Indiranagar
      </h1>

      {/* Hero Image */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://placesinindia.com/wp/wp-content/uploads/2017/06/32594873194_d2e5700267_z.jpg"
        alt="Indiranager"
        className="rounded-[10px] flex w-[1100px] mb-8"
      />
      </div>

      {/* Description */}
      <p className="text-lg font-semibold text-gray-600 leading-relaxed mb-6">
      So, here is a compact weekend guide for all those Indiranagar residents who are bored with the same places to visit. Presenting five restaurants that will give your taste buds a fresh new experience whenever you step out for something different. residents who are bored with the same places to visit.
      </p>

      {/* Section Title */}
      <h2 className="text-4xl mobile:text-2xl my-2 font-bold text-gray-800 mb-4 flex items-center">
        Here are the best places to try food Indiranagar  
      </h2>

      {/* Subsection Image */}

      <h3 className="text-3xl font-bold w-full underline justify-center text-gray-800 my-6 flex items-center">
      Spettacolare
      </h3>
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://b.zmtcdn.com/data/pictures/9/20761949/63507fbaef69b49116365ae04cdf1bb9.jpg"
        alt="Spettacolare, Indiranagar"
        className="rounded-[10px] flex w-[1100px] mb-8"
      />
      </div>


      {/* Subsection Description */}
      <p className="text-lg text-gray-600 font-semibold leading-relaxed mb-6">
      To all my vegetarian friends, when you have a craving for Italian food, then this is a ‘must’ place to visit. Its Roman-style pizzas are simply amazing. Thin, crisp crust with that perfect amount of sauce and cheese, pizzas here will make one forget that pizza needs to be overloaded with meat to taste well. Whether solo or catching up with friends, their pizzas are light and super satisfying. One more thing which I liked about this restaurant was the entire overall vibe of the restaurant. The place was very lively and the waiters were extremely nice and caring.
      </p>




      {/* Customization Section */}
      <h2 className="mobile:text-2xl text-4xl font-bold text-gray-800 mb-4">
        Customized Experiences for Groups and Corporate Guests
      </h2>
      <p className="text-lg font-semibold my-3 text-gray-600 leading-relaxed">
        Planning a group getaway or a corporate retreat this season? Spacez has you
        covered. Our Diwaloween experience extends beyond decor with customizations
        designed to make your stay exactly as you envision it.
      </p>

     
    </div>
    <Footer />
    </>
  );
};

export default BlogDisplay2;
