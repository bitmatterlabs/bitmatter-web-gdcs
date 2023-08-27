import { BuildingIcon } from "../icons/building";
import { ShieldCheckIcon } from "../icons/shieldCheck";
import { BackpackIcon } from "../icons/backpack";
import { BagAltIcon } from "../icons/bagAlt";
import { BlueTickIcon } from "../icons/blueTick";

const licensingFullServices = [
  {
    key: "lf-0",
    text: "Commercial License in Dubai, UAE",
    description: (
      <p>
        Obtaining a commercial license in Dubai provides a versatile and
        general-purpose business permit. This license type typically serves as
        the standard option for new business applicants. Exceptions include
        situations where a more suitable license type exists, such as for
        professionals like architects offering consultancy services, industrial
        operations like air conditioner manufacturing, or businesses in the
        tourism sector like travel agencies.
      </p>
    ),
    icon: <ShieldCheckIcon className="w-full" />,
  },
  {
    key: "lf-1",
    text: "Industrial License In Dubai, UAE",
    description: (
      <p>
        For businesses engaged in industrial or manufacturing endeavors within
        Dubai, holding an industrial license is essential. This license is
        mandatory when a company undertakes the transformation of raw materials
        into various manufactured goods and commodities, with the intent of
        selling them for financial gain. Dubai&apos;s industrial company
        formation adheres to specific regulations. Notably, factories engaged in
        manufacturing-related operations are required to possess an industrial
        license. A range of business activities is permissible under this
        license category.
      </p>
    ),
    icon: <BuildingIcon className="w-full" />,
  },
  {
    key: "lf-3",
    text: "Tourism License",
    description: (
      <>
        <p className="mb-2">
          Ranked as the fourth most visited destination globally, attracting
          over 16 million annual visitors, Dubai stands as a dominant force in
          the travel sector. Aspiring entrepreneurs stepping into this rapidly
          expanding domain can seamlessly navigate the process of acquiring a
          tourism license in Dubai with the expert guidance of Growlytic. At
          Growlytic, we extend comprehensive support to enterprises within the
          hospitality, travel, and tourism realms.
        </p>
        <p className="mb-2">
          Our services encompass adept handling of documentation and meticulous
          management of legal protocols throughout the license procurement
          journey. Selecting the suitable type of tourism license is paramount
          when establishing a business in Dubai.
        </p>
        <p className="mb-2">
          The city offers three primary categories of tourism licenses:
        </p>
        <p className="mb-[0.2rem]">
          <BlueTickIcon className="inline-block w-4 mr-1 aspect-square" />
          Inbound Tourism License
        </p>
        <p className="mb-[0.2rem]">
          <BlueTickIcon className="inline-block w-4 mr-1 aspect-square" />
          Outbound Tourism License
        </p>
        <p className="mb-[0.2rem]">
          <BlueTickIcon className="inline-block w-4 mr-1 aspect-square" />
          Travel Agent/Agency License
        </p>
      </>
    ),
    icon: <BackpackIcon className="w-full" />,
  },
];

export const LicensingPricing = ({ className }: { className?: string }) => {
  return (
    <PricingGridContainer className={className}>
      {licensingFullServices.map((license) => (
        <div
          key={license.key}
          className={`bg-[#ECEFF1] hover:bg-hero-heading-v2 hover:text-white p-2 rounded-[0.375rem] border`}
        >
          <div className="flex items-center justify-start [p_div]:overflow-hidden mb-2">
            <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
              {license.icon}
            </div>

            <p className="font-semibold">{license.text}</p>
          </div>
          {license.description}
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
    <div className={` ${className || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-3"}`}>
      {children}
    </div>
  );
};
