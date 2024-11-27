"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Slider from "../components/Slider";
import {Footer} from "../components/Footer";
import BlogDisplay from "@/app/newblog/blogdisplay";

function ExplorePage() {
  return (
    <>
      {/* Swiper for Banner */}
      <Slider />

      <div className="w-full overflow-x-hidden mobile:mt-12 h-[800px] mobile:pl-2 px-10 mobile:h-auto py-[16px] mobile:py-0">
        {/* Section - Explore in and Around */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl mx-2 mobile:font-bold font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              explore in and around
            </h3>
            {/* <Link href={"/explorecollections"}>
              <button className="text-[#9a7b4f] mobile:mr-8 hover:underline text-base mobile:text-sm">
                see collection →
              </button>
            </Link> */}
          </div>
          <div className="flex flex-wrap justify-between pb-4 smob:mx-1 mobile:mx-4 mx-1">
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px] smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=cafes"}>
                <img
                  src="https://b.zmtcdn.com/data/collections/088c7eea7df002b1fef0c1d257935be4_1709812426.png"
                  alt="Cafes"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:w- mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Cafes
                  </h4>
                </div>
              </Link>
            </div>

            {/* Restaurants Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px] smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=restaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/7/19209267/68a37ea737741f722465ea5a9eeee3f8_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            {/* Restobar Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px] smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=restobars"}>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8a/4a/5c/high-ultra-lounge.jpg?w=1200&h=-1&s=1"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Resto Bars
                  </h4>
                </div>
              </Link>
            </div>
            {/* Bars */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=bars"}>
                <img
                  src="https://b.zmtcdn.com/data/collections/c67357df1d79854b624355b0272c5f28_1674826727.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Bars
                  </h4>
                </div>
              </Link>
            </div>
            {/* Breweries */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=breweries"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/18843699/565978a181e8ae4ab11218dd423e1695.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Breweries
                  </h4>
                </div>
              </Link>
            </div>
            {/* Street Food Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=streetfood"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/0/20163010/1f9b38cab279bdeb05aa550855c700b1_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Street Food
                  </h4>
                </div>
              </Link>
            </div>
            {/* Dessert parlours Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=dessertparlors"}>
                <img
                  src="https://b.zmtcdn.com/data/reviews_photos/211/135971f7ed24f3f4aba69e181e790211_1644785207.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Dessert Parlors
                  </h4>
                </div>
              </Link>
            </div>
            {/* Bakeries Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=bakeries"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/20398679/da06df6d48563e612b8a47ce457cf701.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Bakeries
                  </h4>
                </div>
              </Link>
            </div>
            {/* Fine Dining Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=finedining"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/8/20930988/06f0e8b784b6a2f00f812f54aefcb8f7_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Fine Dining
                  </h4>
                </div>
              </Link>
            </div>
            {/* Casual Dining Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=casualdining"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/1/19890381/ca650ef58d7569c4368f99a23c76c6ca_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Casual Dining
                  </h4>
                </div>
              </Link>
            </div>
            {/* Buffet Restaurents Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=buffetrestaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/2/19860482/e81f0e97e309897c69b2a4c2568bac65.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Buffet Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            {/* Quick Bites Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=quickbites"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/0/21418560/c74eb12c3948f1e412fd4416a668dd85_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Quick Bites
                  </h4>
                </div>
              </Link>
            </div>
            {/* Food Courts Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=foodcourts"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/9/20439699/956ac9bf8427f9cf3fab6cab1d5ed389_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Food Courts
                  </h4>
                </div>
              </Link>
            </div>
            {/* Theme based Eateries Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=themebasedeateries"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/6/19542856/79fee5c8522c9a02d4f60295f7d7d9a1.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Theme-Based Eateries
                  </h4>
                </div>
              </Link>
            </div>
            {/* Rooftop Dining Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=rooftopdining"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/1/55881/31f2201f7caf1632eeb947e6321f19f9.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Rooftop Dining
                  </h4>
                </div>
              </Link>
            </div>
            {/* Family Restaurants Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=familyfriendlyrestaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/7/19511777/c384193195979a8b486fbd3d1c34e6ea_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Family Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            {/* Pet Friendly Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=petfriendlycafes"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/20996449/76db63ab6cca59adc9f1fea4f7823b5a_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Pet-Friendly Cafes
                  </h4>
                </div>
              </Link>
            </div>
            {/* Organic Eateries Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=organiceateries"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/1/19060291/e09672d91cac6380f81ebc58b3354bc0.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Organic Eateries
                  </h4>
                </div>
              </Link>
            </div>
            {/* Ethnic Cuisines Restaurants Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=ethniccuisinerestaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/1/20911451/15cd98a385c1e41f1ef7f7b1da0125b8_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Ethnic Cuisines Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            {/* Vegan and veg Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=veganvegetarianspots"}>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b0/fe/6b/aloft-rohit-dassani.jpg?w=600&h=-1&s=1"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Vegan and Vegetarian Spots
                  </h4>
                </div>
              </Link>
            </div>

            {/* Winebars Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=winebars"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/7/21146027/06eeb4d5559246348992bcca302bd4c8.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Wine Bars
                  </h4>
                </div>
              </Link>
            </div>
            {/* Teahouses Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=teahouses"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/0/50510/8bcdb33346a4274049906b3178156b4d.jpg?fit=around|960:500&crop=960:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Tea Houses
                  </h4>
                </div>
              </Link>
            </div>
            {/* Fast food Card */}
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=fastfoodchains"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/4/50684/321faaf587bef99094387b33e8128222.jpg?fit=around|750:500&crop=750:500;*,*"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Fast Food Chains
                  </h4>
                </div>
              </Link>
            </div>
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=restaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/7/19209267/68a37ea737741f722465ea5a9eeee3f8_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            <div className="flex-none my-2 mx-2 rounded-[8px] w-[340px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]">
              <Link href={"/exploredetails?category=restaurants"}>
                <img
                  src="https://b.zmtcdn.com/data/pictures/7/19209267/68a37ea737741f722465ea5a9eeee3f8_featured_v2.jpg"
                  alt="Restaurants"
                  className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                    Restaurants
                  </h4>
                </div>
              </Link>
            </div>
            <BlogDisplay />
          </div>
          <Footer />
        </div>


       

        {/* Section - Events to Break Monotony */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl mobile:font-bold font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              events to break monotony
            </h3>
            <button className="text-[#9a7b4f] mobile:mr-8 hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[340px] rounded-[8px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]"
              >
                <Link href={"/exploredetails"}>
                  <img
                    src="https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2022/08/21223321/Coldplay-_news.jpg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Cozy Cafe
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      3 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* Section - Best Cruise Around You */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl mobile:font-bold font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              best cruise around you
            </h3>
            <button className="text-[#9a7b4f] mobile:mr-8 hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[340px] rounded-[8px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]"
              >
                <Link href={"/exploredetails"}>
                  <img
                    src="https://cdn.prod.website-files.com/65bb0d838b57c5aa2c4a2b9d/65e1eaa9c88fa546d21ab2d6_61766357266d4a50df17786f_9w2ykjya.jpeg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Luxury Dining
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      9 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* Section - Enjoy with the Young Ones */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl mobile:font-bold font-semibold text-[#584139] tab:text-2xl mobile:text-xl">
              enjoy with the young ones
            </h3>
            <button className="text-[#9a7b4f] mobile:mr-8 hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[340px] rounded-[8px] overflow-hidden relative tab:w-[250px]  smob:min-w-[150px] mobile:h-[220px] mobile:w-[170px]"
              >
                <Link href={"/exploredetails"}>
                  <img
                    src="https://img.freepik.com/premium-photo/women-has-fun-happy-joy-day-amusement-park-summer-sunny-day-roller-coaster-jumping-girl-vacation-leisure-holiday-activities-concept-asian-women-nice-clear-blue-sky-enjoy-moment_33755-8725.jpg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Cozy Cafe
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      3 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ExplorePage;
