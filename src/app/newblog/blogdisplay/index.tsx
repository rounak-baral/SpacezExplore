import React from 'react';
import BlogLayout from '../layoutt/index';

const BlogDisplay: React.FC = () => {
  return (
    <div className="flex w-full justify-around flex-wrap mx-auto p-6 space-y-6">
      <BlogLayout
        title="Tired of trying the same food in Indiranagar" 
        description="So, here is a compact weekend guide for all those Indiranagar residents who are bored with the same places to visit. Presenting five restaurants that will give your taste buds a fresh new experience whenever you step out for something different."
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/26/e3/88/f3/fresh-pork-tenderloin.jpg"
        link="/blogs/best-food-in-indiranagar" // Link to the detailed blog page
      />
      <BlogLayout
        title="5 Must-Try Experiences in Bangalore: A Local’s Guide to Food, Fun, and More" 
        description=" Be it heading to Bangalore or already an in-city dweller looking for newer ideas, the fact that this city is abuzz with life and rich flavors is surely known to you. From buzzing nightlife to exquisite food culture, the things one can do here are really endless. Let us make it easy for you by listing here five must-not-miss experiences in Bangalore, something which should be up your alleys."
        imageUrl="https://zolostays.com/blog/wp-content/uploads/2023/11/Best-Areas-to-Stay-in-Bangalore-A-Guide-for-Youngsters-scaled.jpg"
        link="/blogs/must-try-experiences-in-bangalore" // Link to the detailed blog page
      />
      <BlogLayout
        title="Best Dessert Place in Bangalore" 
        description="You know how everyone’s always talking about the latest dessert spots in Bangalore? Well, I’ve found one that’s seriously flying under the radar, and I have to share it with you. It’s called Avocado and Brownies, tucked away in the cozy little streets of Kamanahalli, and trust me, once you go, you’ll be hooked. I’m talking about desserts so good, you’ll find yourself making excuses to go back!"
        imageUrl="https://content3.jdmagicbox.com/v2/comp/bangalore/l3/080pxx80.xx80.210915215913.g8l3/catalogue/avocado-and-brownies-pulikeshi-nagar-bangalore-sweet-shops-4l0h83q8c6.jpg"
        link="/blogs/best-dessert-place-in-bangaore" // Link to the detailed blog page
      />
      <BlogLayout
        title="Tibet in Bangalore ?" 
        description="You know how when people think of weekend getaways from Bangalore, they usually talk about the usual spots—foodie adventures, cool cafes, or maybe a quick trip to Coorg or Nandi Hills? But let me tell you, there’s so much more to explore beyond just eating and drinking. A few weekends ago, I discovered this place called Dhondiling, and honestly, it’s Karnataka’s best-kept secret. It’s like stepping into Tibet without actually leaving the state."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB30HYj_lA9c9EH3lmOvxMbYbKCoDIFo6jqQ&s"
        link="/blogs/asiain-experience-in-bangalore" // Link to the detailed blog page
      />
      <BlogLayout
        title="Banglore is more than just food and driking: Willy’s Pet Paradise" 
        description="You know how everyone’s always raving about Bangalore’s food scene, right? The endless cafes, breweries, and street food? Don’t get me wrong, it’s all amazing, but I gotta say, there’s so much more to this city than just what’s on your plate (or in your glass). If you’re like me and sometimes crave something different—something beyond just eating and drinking—then you’ve got to check out Willy’s Pet Paradise. It’s this hidden gem where you can chill with dogs, escape the city’s chaos, and, honestly, just have a blast."
        imageUrl="https://pawclub.in/wp-content/uploads/2024/03/Willes-Pet-Paradise_Karnataka1-1024x766.jpg"
        link="/blogs/bangalore-more-than-just-food-and-drinking" // Link to the detailed blog page
      />
      <BlogLayout
        title="Missing Mumbai ka vada pav in Bangalore" 
        description="Bengaluru has no shortage of amazing food, but if you’re craving authentic Maharashtrian misal pav, you might think you’d have to head all the way to Pune or Kolhapur. Well, let me tell you, you don’t! Tucked away in the city is Govern Misal, and after trying their food, I’m pretty convinced they serve the best misal pav in town—and that’s a bold claim I think they can back up."
        imageUrl="https://bangalore.explocity.com/media/media/posts/digets.jpg"
        link="/blogs/mumbai-vada-pav-in-bangalore" // Link to the detailed blog page
      />
      <BlogLayout
        title="Explore Bangalore in 24 hours" 
        description="Got just 24 hours to explore Bengaluru? Don’t sweat it—you can still pack in a solid day of fun, food, and culture. Whether it’s sampling some legendary local dishes, wandering through peaceful gardens, or soaking up the city’s creative vibe, here’s your ultimate guide to experiencing the best of Bengaluru in just one day."
        imageUrl="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Bangalore-travel-tips_3rd-dec.jpg"
        link="/blogs/explore-bangalore-in-24-hours" // Link to the detailed blog page
      />
      <BlogLayout
        title="Dining Experience in Bangalore" 
        description="Bangalore is a city that’s always on the move, with new restaurants opening left, right, and center. Yet, among all this change, a few timeless places continue to hold their ground. One such classic is The Only Place, a restaurant that has been delighting food lovers since 1965—a true legend in the city's food scene."
        imageUrl="https://www.connectingtraveller.com/images/localtip/1626724463onl1.jpg"
        link="/blogs/timeless-dining-experience-in-bangalore" // Link to the detailed blog page
      />
      <BlogLayout
        title="Dining Experience in Bangalore" 
        description="Whether you are a foodie in Bengaluru or just looking to have that one different kind of food adventure, there's only one place that needs to be in your top list: Thindi Beedi in VV Puram, or I like to call it, the OG food street of Bengaluru. It is heaven on earth for any street food lover just like me, and the best part is that you can fill your tummy with a variety of food  just for five hundred rupees. The following walk down Thindi Beedi will let us know all about what not to miss."
        imageUrl="https://static.toiimg.com/thumb/48437331/Thindi-Beedi.jpg?width=1200&height=900"
        link="/blogs/iconic-thindi-beedi-bangalore" // Link to the detailed blog page
      />

    </div>
  );
};

export default BlogDisplay;
