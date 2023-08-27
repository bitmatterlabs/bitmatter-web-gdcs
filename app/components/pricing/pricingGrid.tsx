"use client";

import { useState } from "react";
import { BagAltIcon } from "../icons/bagAlt";
import { BoltIcon } from "../icons/bolt";
import { TickIcon } from "../icons/tick";

export const LicensingPricing = ({ className }: { className?: string }) => {
  const [dplWithVisa, setDplWithVisa] = useState(false);

  return (
    <PricingGridContainer className={className}>
      <div
        className={`bg-hero-heading-v2 text-white rounded-[0.6rem] overflow-hidden shadow-md`}
      >
        <div className="relative h-[12rem] flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-heading-primary">
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            <BagAltIcon className="fill-white" />
          </div>

          <p className="font-bold text-white text-lg">
            Dubai Mainland Professional License
          </p>
          <p className="absolute top-1 right-1 text-xs font-bold text-white bg-[#F44336] rounded-[0.25rem] px-[0.5rem] py-[0.2rem]">
            MOST POPULAR
          </p>
          <BoltIcon
            scale={6}
            className="absolute aspect-square opacity-20 right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="px-5 pb-5">
          <div className="flex justify-between w-full items-center text-md">
            <p className="font-medium text-sm">
              {dplWithVisa ? "With Visa" : "Without Visa"}{" "}
            </p>
            <label className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
              <span className="relative border-black">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  checked={dplWithVisa}
                  onClick={() => setDplWithVisa((active) => !active)}
                />
                <div className="w-[2.8rem] h-[1.6rem] rounded-full shadow-inner bg-[#B0BEC5] peer-checked:bg-heading-primary  transition-colors duration-200"></div>
                <div className="absolute right-auto left-[0.3rem] top-1/2 -translate-y-1/2 w-[1.1rem] aspect-square rounded-full shadow peer-checked:right-[0.3rem] peer-checked:left-auto bg-gray-800 transition-[left, right] duration-200"></div>
              </span>
            </label>
          </div>
          <div className="mt-2 mb-4 flex justify-start items-center flex-wrap">
            <span className="mr-1 text-[1rem] md:text-[1.2rem] font-bold mb-1">
              AED
            </span>
            <p className="text-[2.5rem] md:text-[2.8rem] font-bold">
              {dplWithVisa ? "14,500" : "11,500"}
            </p>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Ownership</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Trade Lincense Cost</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow"> Trade Name Reservation</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">
              {dplWithVisa ? "MOA" : "UAE National Sponsorship"}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-hero-heading-v2 text-white rounded-[0.6rem] overflow-hidden shadow-md`}
      >
        <div className="relative h-[12rem] flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-heading-primary">
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            <BagAltIcon className="fill-white" />
          </div>

          <p className="font-bold text-white text-lg">
            General Trading + Ecommerce License
          </p>
          <p className="hidden absolute top-1 right-1 text-xs font-bold text-white bg-[#F44336] rounded-[0.25rem] px-[0.5rem] py-[0.2rem]">
            MOST POPULAR
          </p>
          <BoltIcon
            scale={6}
            className="absolute aspect-square opacity-20 right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="px-5 pb-5">
          {/* <div className="flex justify-between w-full items-center text-md">
            <p className="font-medium text-sm">
              {dplWithVisa ? "With Visa" : "Without Visa"}{" "}
            </p>
            <label className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
              <span className="relative border-black">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  checked={dplWithVisa}
                  onClick={() => setDplWithVisa((active) => !active)}
                />
                <div className="border w-[2.8rem] h-[1.6rem] rounded-full shadow-inner bg-[#B0BEC5] peer-checked:bg-[#66BB6A]  transition-colors duration-200"></div>
                <div className="absolute right-auto left-[0.3rem] top-1/2 -translate-y-1/2 w-[1.1rem] aspect-square rounded-full shadow peer-checked:right-[0.3rem] peer-checked:left-auto bg-gray-800 transition-[left, right] duration-200"></div>
              </span>
            </label>
          </div> */}

          <div className="mt-6 mb-4 flex justify-start items-center flex-wrap">
            <span className="mr-1 text-[1rem] md:text-[1.2rem] font-bold mb-1">
              AED
            </span>
            <p className="text-[2.5rem] md:text-[2.8rem] font-bold">13,500</p>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Foreign Ownership</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">1 UAE Residence Visa</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Pay in Two Easy Insallments</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Dedicated Relationship Manager</div>
          </div>
        </div>
      </div>
      <div
        className={`bg-hero-heading-v2 text-white rounded-[0.6rem] overflow-hidden shadow-md`}
      >
        <div className="relative md:h-[12rem] flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-heading-primary">
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            <BagAltIcon className="fill-white" />
          </div>

          <p className="font-bold text-white text-lg">
            Offshore Business License
          </p>
          <p className="hidden absolute top-1 right-1 text-xs font-bold text-white bg-[#F44336] rounded-[0.25rem] px-[0.5rem] py-[0.2rem]">
            MOST POPULAR
          </p>
          <BoltIcon
            scale={6}
            className="absolute aspect-square opacity-20 right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="px-5 pb-5">
          {/* <div className="flex justify-between w-full items-center text-md">
            <p className="font-medium text-sm">
              {dplWithVisa ? "With Visa" : "Without Visa"}{" "}
            </p>
            <label className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
              <span className="relative border-black">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  checked={dplWithVisa}
                  onClick={() => setDplWithVisa((active) => !active)}
                />
                <div className="border w-[2.8rem] h-[1.6rem] rounded-full shadow-inner bg-[#B0BEC5] peer-checked:bg-[#66BB6A]  transition-colors duration-200"></div>
                <div className="absolute right-auto left-[0.3rem] top-1/2 -translate-y-1/2 w-[1.1rem] aspect-square rounded-full shadow peer-checked:right-[0.3rem] peer-checked:left-auto bg-gray-800 transition-[left, right] duration-200"></div>
              </span>
            </label>
          </div> */}

          <div className="mt-6 mb-4 flex justify-start items-center flex-wrap">
            <span className="mr-1 text-[1rem] md:text-[1.2rem] font-bold mb-1">
              AED
            </span>
            <p className="text-[2.5rem] md:text-[2.8rem] font-bold">8,500</p>
          </div>

          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Foreign Ownership</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Tax Free</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Any 3 Activities under One License</div>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">
              No Paid-up Share Capital or Audit Requirements
            </div>
          </div>
        </div>
      </div>
    </PricingGridContainer>
  );
};

export const PricingGridContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` ${
        className || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-3"
      }`}
    >
      {children}
    </div>
  );
};
