"use client";

import { useState } from "react";
import { BagAltIcon } from "../icons/bagAlt";
import { BoltIcon } from "../icons/bolt";
import { TickIcon } from "../icons/tick";

export const LicensingPricing = ({ className }: { className?: string }) => {
  const [dplWithVisa, setDplWithVisa] = useState(false);

  const packages = [
    {
      key: "pack-0",
      name: "Dubai Mainland Professional License",
      mostPopularTag: true,
      visaToggleVisible: true,
      visaToggle: (
        <div className="flex items-center justify-between w-full text-md">
          <p className="text-sm font-medium">
            {dplWithVisa ? "With Visa" : "Without Visa"}{" "}
          </p>
          <label className="inline-flex items-center space-x-4 text-gray-100 cursor-pointer">
            <span className="relative border-black">
              <input
                id="Toggle1"
                type="checkbox"
                className="hidden peer"
                checked={dplWithVisa}
                onClick={() => setDplWithVisa((active) => !active)}
              />
              <div className="w-[2.8rem] h-[1.6rem] rounded-full shadow-inner bg-toggle-off peer-checked:bg-toggle-on  transition-colors duration-200"></div>
              <div className="absolute right-auto left-[0.3rem] top-1/2 -translate-y-1/2 w-[1.1rem] aspect-square rounded-full shadow peer-checked:right-[0.3rem] peer-checked:left-auto bg-toggle-node transition-[left, right] duration-200"></div>
            </span>
          </label>
        </div>
      ),
      currencyCode: "AED",
      cost: (
        <p className="text-[2.5rem] md:text-[2.8rem] font-bold">
          {dplWithVisa ? "14,500" : "11,500"}
        </p>
      ),
      features: (
        <>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Ownership</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Trade Lincense Cost</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow"> Trade Name Reservation</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">
              {dplWithVisa ? "MOA" : "UAE National Sponsorship"}
            </div>
          </div>
        </>
      ),
      icon: <BagAltIcon className="fill-white" />,
      backgroundIcon: (
        <BoltIcon
          scale={6}
          className="absolute -translate-y-1/2 aspect-square opacity-20 right-3 top-1/2"
        />
      ),
    },
    {
      key: "pack-1",
      name: "General Trading + Ecommerce License",
      mostPopularTag: false,
      visaToggleVisible: false,
      visaToggle: <></>,
      currencyCode: "AED",
      cost: <p className="text-[2.5rem] md:text-[2.8rem] font-bold">13,500</p>,
      features: (
        <>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Foreign Ownership</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">1 UAE Residence Visa</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Pay in Two Easy Insallments</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Dedicated Relationship Manager</div>
          </div>
        </>
      ),
      icon: <BagAltIcon className="fill-white" />,
      backgroundIcon: (
        <BoltIcon
          scale={6}
          className="absolute -translate-y-1/2 aspect-square opacity-20 right-3 top-1/2"
        />
      ),
    },
    {
      key: "pack-2",
      name: "Dubai Mainland Commercial L.L.C. License",
      mostPopularTag: false,
      visaToggleVisible: false,
      visaToggle: <></>,
      currencyCode: "AED",
      cost: <p className="text-[2.5rem] md:text-[2.8rem] font-bold">15,499</p>,
      features: (
        <>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">100% Ownership</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Trade License Cost</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Initial Approval</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Trade Name Reservation</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">MOA</div>
          </div>
          <div className="flex justify-start w-full">
            <div className="w-4 mr-1 mb-[0.1rem] flex-grow-0 flex-shrink-0">
              <TickIcon />
            </div>
            <div className="flex-grow">Free Activity Consultation</div>
          </div>
        </>
      ),
      icon: <BagAltIcon className="fill-white" />,
      backgroundIcon: (
        <BoltIcon
          scale={6}
          className="absolute -translate-y-1/2 aspect-square opacity-20 right-3 top-1/2"
        />
      ),
    },
  ];

  return (
    <PricingGridContainer className={className}>
      {packages.map((pack) => (
        <div
          key={pack.key}
          className={`bg-card-secondary text-white rounded-[0.6rem] overflow-hidden shadow-md`}
        >
          <div className="relative h-[12rem] flex items-center justify-start [p_div]:overflow-hidden mb-2 px-4 py-5 bg-card-pricing">
            <div className="flex-grow-0 flex-shrink-0 w-6 mr-2">
              {pack.icon}
            </div>
            <p className="text-lg font-bold text-white">{pack.name}</p>
            {pack.mostPopularTag && (
              <p className="absolute top-1 right-1 text-xs font-bold text-white bg-[#F44336] rounded-[0.25rem] px-[0.5rem] py-[0.2rem]">
                MOST POPULAR
              </p>
            )}
            {pack.backgroundIcon}
          </div>
          <div className="px-5 pb-5">
            {pack.visaToggle}
            <div
              className={`flex flex-wrap items-center justify-start mt-${
                pack.visaToggleVisible ? "2" : "6"
              } mb-4`}
            >
              <span className="mr-1 text-[1rem] md:text-[1.2rem] font-bold mb-1">
                {pack.currencyCode}
              </span>
              {pack.cost}
            </div>
            {pack.features}
          </div>
        </div>
      ))}
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
