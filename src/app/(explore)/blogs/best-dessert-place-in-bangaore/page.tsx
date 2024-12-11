import React from 'react';
import { Footer } from '../../components/Footer';

const BlogDisplay3: React.FC = () => {
  return (
    <>
    <div className="flex flex-col max-w-[70%] justify-center mx-auto p-6">
      
      
      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      {/* //-> Title*/}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
      Avocado and Brownies: Bangalore’s Hidden Dessert Paradise
      </h1>

      {/* //-> Title Image */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://yourimageurl.com" // Replace with a valid image URL for "Avocado and Brownies"
        alt="Avocado and Brownies, Kamanahalli"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>

      {/* //-> Title Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Discover a dessert haven in Kamanahalli that is a delightful secret waiting to be explored. From heavenly brownies to indulgent treats, Avocado and Brownies is a must-visit for dessert enthusiasts in Bangalore.
      </p>

      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      {/* //-> Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        Why Avocado and Brownies Deserves a Spot on Your Dessert Bucket List  
      </h2>
      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}



      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      {/* //-> Section Title 1 */}
       <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      A Brownie Wonderland
      </h3>
      {/* //-> Section Image 1 */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://yourimageurl.com" // Replace with a valid image URL for "Brownie Wonderland"
        alt="Brownie Wonderland at Avocado and Brownies"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>
      {/* //-> Section Bio 1 */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      With over 15 flavors of brownies, Avocado and Brownies is a paradise for dessert lovers. From classic fudgy brownies to inventive variations with marshmallows, nuts, or chocolate chips, there’s something for everyone. Customize your brownie with whipped cream, caramel drizzle, or even a scoop of ice cream for the ultimate indulgence.
      </p>
      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------Section 2----------------------------------------------------------------------*/}
      {/* //-> Section Title 2 */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      Sweet Surprises Beyond Brownies
      </h3>
      {/* //-> Section Image 2 */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://yourimageurl.com" // Replace with a valid image URL for "Sweet Surprises"
        alt="Sweet Surprises at Avocado and Brownies"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>
      {/* //-> Section Bio 2 */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      The mini croissants drizzled with sauces are flaky, buttery, and perfect for snacking. Don’t miss their tres leches cake—it’s soft, creamy, and melts in your mouth. For a modern twist on Indian sweets, try their milk cake slices, blending tradition with innovation in every bite.
      </p>
      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      
      {/* //-> Section Title 3 */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      The Guacamole Croissant Sandwich
      </h3>
      {/* //-> Section Image 3 */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://yourimageurl.com" // Replace with a valid image URL for "Guacamole Croissant"
        alt="Guacamole Croissant Sandwich at Avocado and Brownies"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>
      {/* //-> Section Bio 3 */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      This unexpected savory delight combines flaky croissant layers with creamy guacamole and melted cheese. It’s an irresistible mix of textures and flavors that will have you hooked from the first bite.
      </p>

      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      
      {/* //-> Section Title 4 */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      Cozy Vibes in Kamanahalli
      </h3>
      {/* //-> Section Image 4 */}
      <div className="flex w-full justify-center rounded-lg">
      <img
        src="https://yourimageurl.com" // Replace with a valid image URL for "Cozy Vibes"
        alt="Cozy Vibes at Avocado and Brownies"
        className="rounded-[10px] flex w-[800px] mb-8"
      />
      </div>
      {/* //-> Section Bio 4 */}
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Nestled in the peaceful streets of Kamanahalli, this cafe offers a warm and inviting ambiance. It’s the perfect hideaway to enjoy your dessert with a cup of coffee, making every visit feel special and intimate.
      </p>

      {/* ------------------------------------------------------------------------------------------------------------------------------------*/}
      
      {/* //-> Closing Note */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Why Wait? Indulge Now!
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
      Avocado and Brownies is more than a cafe; it’s an experience. From unique desserts to its cozy charm, this hidden gem is a must-visit in Bangalore. Head over to Kamanahalli today and discover your next dessert obsession!
      </p>

         {/* ------------------------------------------------------------------------------------------------------------------------------------*/}



      {/* Customization Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Found Your Dessert Haven?
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
      Share your thoughts in the comments below! Don’t forget to follow me for more hidden gems in Bangalore.
      </p>

     
    </div>
    <Footer />
    </>
  );
};

export default BlogDisplay3;