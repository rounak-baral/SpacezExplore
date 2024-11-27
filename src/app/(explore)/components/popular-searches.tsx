"use client";

import { TitleText } from "../common/title-text";
import { LabelText } from "../common/label-text";
import { useState } from "react";
import Link from "next/link";

export const PopularSearches = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="self-center flex items-center gap-x-3 mx-auto mobile:my-3"
      >
        <TitleText className="text-neutralN7">popular searches</TitleText>
        
      </button>
      <div className="bg-[#BCA390] w-full h-[0.5px] my-3 mobile:my-0" />
      {isExpanded && (
        <>
          <div className="text-center mobile:my-3">
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Affordable Luxury Villas in Bangalore
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Affordable Villas in Bangalore
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Affordable Villas in Central Bangalore
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Homestays for Long Weekends
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Luxury Villa with Private Pool
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Corporate Meetings
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Corporate Stays
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Couples
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Extended Family
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Family Gatherings
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Private Events
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Private Parties
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Romantic Escapes
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Romantic Weekends
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Short Term Stay
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Small Events
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Staycations
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas for Weekend Breaks
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas Near Business District
              </LabelText>
            </Link>
            <span className="inline-block text-neutralN7 -mt-1 mx-1.5 w-[0.5px] h-3 bg-neutralN7"></span>
            <Link href="https://www.spacez.co">
              <LabelText className="!inline font-normal !text-[12px] text-neutralN7 !text-center">
                Bangalore Villas Near Business Hubs
              </LabelText>
            </Link>
          </div>
          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px] mobile:mt-3" />
        </>
      )}
    </>
  );
};