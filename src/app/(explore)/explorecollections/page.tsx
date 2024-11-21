"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Footer } from "../components/Footer";

function ExploreCollection() {
  const [activeTab, setActiveTab] = useState("city");

  return (
    <div className="w-screen px-5 mx-auto p-6">
      {/* Tabs Navigation */}
      <div className="flex space-x-8 mb-8 border-b py-3 sticky">
        <button
          onClick={() => setActiveTab("city")}
          className={`text-xl mobile:text-lg font-semibold relative ${
            activeTab === "city" ? "text-[#584139]" : "text-[#A58E74]"
          }`}
        >
          explore the city
          {activeTab === "city" && (
            <span className="absolute bottom-[-12px] left-0 w-full h-[3px] bg-[#584139]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("away")}
          className={`text-xl mobile:text-lg font-semibold relative ${
            activeTab === "away" ? "text-[#584139]" : "text-[#A58E74]"
          }`}
        >
          away from the city
          {activeTab === "away" && (
            <span className="absolute bottom-[-12px] left-0 w-full h-[3px] bg-[#584139]" />
          )}
        </button>
      </div>

      {activeTab === "city" ? (
        <div>
          <div className="mb-12">
            <div className="flex w-full justify-start flex-wrap pb-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex-none w-[350px] mr-[15px] rounded-[8px] overflow-hidden bg-transparent my-5 flex-wrap relative"
                >
                  <img
                    src="https://assets2.devourtours.com/wp-content/uploads/flickr-Paul-VanDerWerf-best-parks-in-nyc.jpg"
                    alt="Away from City"
                    className="w-[342] h-[430px] rounded-[8px] object-cover"
                  />
                  <div className="absolute inset-0 pb-8 flex flex-col justify-end p-4 text-white bg-black bg-opacity-40 rounded-lg">
                    <h4 className="mobile:text-xl text-3xl font-semibold">
                      Greens to Relax
                    </h4>
                    <p className="mobile:text-sm text-base">9 places ›</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-12">
            <div className="flex w-full justify-start rounded-lg flex-wrap pb-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex-none w-[350px] mr-[15px] bg-transparent  rounded-[8px] overflow-hidden my-5 flex-wrap relative"
                >
                  <Link href={"/exploreblogs"}>
                    <img
                      src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Lotus-Temple.jpg"
                      alt="Away from City"
                      className="w-[342] h-[430px] rounded-[8px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4  pb-8 text-white bg-black bg-opacity-40 rounded-lg">
                      <h4 className="mobile:text-xl text-3xl font-semibold">
                        Greens to Relax
                      </h4>
                      <p className="mobile:text-sm text-xl">9 places ›</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[#584139] mb-6">
          explore other options
        </h3>
        <div className="space-y-4">
          {["Eateries", "Events Series", "Kids Kit"].map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-md"
            >
              <span className="mobile:text-lg text-2xl px-3 font-semibold text-[#342A28]">
                {option}
              </span>
              <button className="text-[#9a7b4f] hover:underline">
                SPACEZ COLLECTION →
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreCollection;
