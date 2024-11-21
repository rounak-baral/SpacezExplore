"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";
import Slider from "../components/Slider";
import { useSearchParams } from "next/navigation";
import Pattern from "../../../../assets/pngwing.com (1) 3.png";

// Define types for TypeScript
type CafeOrRestaurant = {
  name: string;
  description: string;
  rating: number;
  address: string;
  price_for_two: string;
  speciality: string[];
  image_link: string;
};

type CafesData = {
  cafes: CafeOrRestaurant[];
  restaurants: CafeOrRestaurant[];
  restobars: CafeOrRestaurant[];
  bars: CafeOrRestaurant[];
  breweries: CafeOrRestaurant[];
  streetfood: CafeOrRestaurant[];
  dessertparlors: CafeOrRestaurant[];
  bakeries: CafeOrRestaurant[];
  finedining: CafeOrRestaurant[];
  casualdining: CafeOrRestaurant[];
  buffetrestaurants: CafeOrRestaurant[];
  quickbites: CafeOrRestaurant[];
  foodcourts: CafeOrRestaurant[];
  themebasedeateries: CafeOrRestaurant[];
  rooftopdining: CafeOrRestaurant[];
  familyfriendlyrestaurants: CafeOrRestaurant[];
  petfriendlycafes: CafeOrRestaurant[];
  organiceateries: CafeOrRestaurant[];
  ethniccuisinerestaurants: CafeOrRestaurant[];
  veganvegetarianspots: CafeOrRestaurant[];
  icecreamgelatoshops: CafeOrRestaurant[];
  winebars: CafeOrRestaurant[];
  teahouses: CafeOrRestaurant[];
  fastfoodchains: CafeOrRestaurant[];
};

// Import cafesData JSON and cast it to the correct type
import cafesDataJson from "../../data.json";
import { Footer } from "../components/Footer";
const cafesData = cafesDataJson as CafesData;

// Component to use searchParams safely in Suspense
function ExploreDetailsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.toLowerCase() || "cafes"; // Default to "cafes" if no category is provided
  // Select the correct data array based on category
  const data = cafesData[category as keyof CafesData] || cafesData.cafes;

  return (
    <>
      <Slider />
      <div
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain", 
      }}
      className="w-screen mx-auto p-6">
        {/* Section Cards */}
        <div className="flex flex-wrap w-full justify-around items-start mb-16">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="mobile:w-full w-[699px] h-[528px] mobile:-mb-32 mb-24"
              >
                <Link
                  href={`/exploreblogs?section=${index}&category=${category}`}
                >
                  <div className="bg-transparent rounded-lg overflow-hidden">
                    <Image
                      src={item.image_link}
                      alt={item.name}
                      className="w-[699px] shadow-lg mobile:h-[220px] h-[430px] rounded-[8px] object-cover"
                      width={699}
                      height={430}
                    />
                    <div className="py-7 mobile:py-2">
                      <h3 className="text-3xl mobile:text-lg font-semibold mobile:mb-0 text-[#342A28]">
                        {item.name}
                      </h3>
                      <p className="text-lg mobile:text-base font-medium text-[#A58E74] mb-3 underline">
                        {item.address}
                      </p>
                      <div className="flex items-center w-full mb-3 space-x-4 text-[#343534]">
                        <p className="tab:text-base mobile:text-sm font-bold text-[#584139]">
                          <span className="font-medium">Ticket Prices: </span>
                          {item.price_for_two}
                        </p>
                        <span className="mx-2 text-[#9a7b4f]">|</span>
                        <p className="tab:text-base mobile:text-sm font-semibold text-[#584139]">
                          <span className="font-normal">Speciality: </span>
                          {item.speciality.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No items found for the selected category:{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}.
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default function ExploreDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExploreDetailsContent />
    </Suspense>
  );
}
