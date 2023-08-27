"use client";

import { useState } from "react";
import { BagAltIcon } from "../icons/bagAlt";
import { BoltIcon } from "../icons/bolt";
import { BlueTickIcon } from "../icons/blueTick";

export const LicensingPricing = ({ className }: { className?: string }) => {
  const [dplWithVisa, setDplWithVisa] = useState(false);

  return (
    <PricingGridContainer className={className}>
      <div
        className={`bg-[#F5F5F5] hover:bg-hero-heading-v2 hover:text-white rounded-[0.6rem] overflow-hidden shadow-md border`}
      >
        <div className="relative flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-hero-heading-blue">
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
                <div className="border w-[2.8rem] h-[1.6rem] rounded-full shadow-inner bg-[#B0BEC5] peer-checked:bg-[#66BB6A]  transition-colors duration-200"></div>
                <div className="absolute right-auto left-[0.3rem] top-1/2 -translate-y-1/2 w-[1.1rem] aspect-square rounded-full shadow peer-checked:right-[0.3rem] peer-checked:left-auto bg-gray-800 transition-[left, right] duration-200"></div>
              </span>
            </label>
          </div>
          <div className="mt-2 mb-4">
            <p className="text-6xl font-bold">
              <span className="mr-1 text-2xl">AED</span>
              {dplWithVisa ? "14,500" : "11,500"}
            </p>
          </div>
          <div className="[&_p]:font-medium">
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              100% Ownership
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              Trade Lincense Cost
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              Trade Name Reservation
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              {dplWithVisa ? "MOA" : "UAE National Sponsorship"}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#F5F5F5] hover:bg-hero-heading-v2 hover:text-white rounded-[0.6rem] overflow-hidden shadow-md border`}
      >
        <div className="relative flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-hero-heading-blue">
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
          <div className="mt-6 mb-4">
            <p className="text-6xl font-bold">
              <span className="mr-1 text-2xl">AED</span>
              13,500
            </p>
          </div>
          <div className="[&_p]:font-medium">
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              100% Foreign Ownership
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              1 UAE Residence Visa
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              Pay in Two Easy Insallments
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              Dedicated Relationship Manager
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#F5F5F5] hover:bg-hero-heading-v2 hover:text-white rounded-[0.6rem] overflow-hidden shadow-md border`}
      >
        <div className="relative flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-hero-heading-blue">
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
          <div className="mt-6 mb-4">
            <p className="text-6xl font-bold">
              <span className="mr-1 text-2xl">AED</span>
              8,500
            </p>
          </div>
          <div className="[&_p]:font-medium">
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              100% Foreign Ownership
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              100% Tax Free
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              Any 3 Activities under One License
            </p>
            <p>
              <BlueTickIcon className="inline-block w-4 aspect-square mr-1 mb-[0.2rem]" />
              No Paid-up Share Capital or Audit Requirements
            </p>
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
