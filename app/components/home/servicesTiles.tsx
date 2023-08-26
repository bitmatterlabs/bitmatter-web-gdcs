import { BuildingIcon } from "../icons/building";
import { PlaneIcon } from "../icons/plane";
import { ShieldCheckIcon } from "../icons/shieldCheck";
import { BackpackIcon } from "../icons/backpack";
import { MountainsIcon } from "../icons/mountains";
import { WavesIcon } from "../icons/waves";
import { CellsIcon } from "../icons/cells";
import { BagAltIcon } from "../icons/bagAlt";
import { FileSearchIcon } from "../icons/fileSearch";
import { UserArrowsIcon } from "../icons/userArrows";
import { USDCircleIcon } from "../icons/usdCircle";

const licensingServices = [
  {
    key: "licensing-0",
    text: "Commercial License in Dubai, UAE",
    icon: <ShieldCheckIcon className="w-full" />,
  },
  {
    key: "licensing-1",
    text: "Industrial License In Dubai, UAE",
    icon: <BuildingIcon className="w-full" />,
  },
  {
    key: "licensing-2",
    text: "Professional License in Dubai, UAE",
    icon: <BagAltIcon className="w-full" />,
  },
  {
    key: "licensing-3",
    text: "Tourism License",
    icon: <BackpackIcon className="w-full" />,
  },
];

const companySetupOptions = [
  {
    key: "companysetup-0",
    text: "Mainland Company Formation",
    icon: <MountainsIcon className="w-full" />,
  },
  {
    key: "companysetup-1",
    text: "OffShore Company Formation",
    icon: <WavesIcon className="w-full" />,
  },
  {
    key: "companysetup-2",
    text: "Freezone Company Formation",
    icon: <CellsIcon className="w-full" />,
  },
];

const visaOptions = [
  {
    key: "visa-0",
    text: "10 Year UAE Golden Visa",
    icon: <PlaneIcon className="w-full" />,
  },
];

const vatTaxOptions = [
  {
    key: "vat-0",
    text: "Management Consultancy",
    icon: <UserArrowsIcon className="w-full" />,
  },
  {
    key: "vat-1",
    text: "Due Diligence and Business Valuation",
    icon: <FileSearchIcon className="w-full" />,
  },
  {
    key: "vat-2",
    text: "Financial Consultancy",
    icon: <USDCircleIcon className="w-full" />,
  },
];

export const LicensingTiles = ({ className }: { className?: string }) => {
  return (
    <ServicesTileContainer className={className}>
      {licensingServices.map((license) => (
        <div
          key={license.key}
          className={`bg-[#ECEFF1] hover:bg-hero-heading-v2 hover:text-white flex items-center justify-start p-2 rounded-[0.375rem] border [p_div]:overflow-hidden`}
        >
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            {license.icon}
          </div>

          <p className="font-semibold">{license.text}</p>
        </div>
      ))}
    </ServicesTileContainer>
  );
};

export const CompanySetupTiles = ({ className }: { className?: string }) => {
  return (
    <ServicesTileContainer className={className}>
      {companySetupOptions.map((companySetup) => (
        <div
          key={companySetup.key}
          className={`bg-[#ECEFF1] hover:bg-hero-heading-v2 hover:text-white flex items-center justify-start p-2 rounded-[0.375rem] border [p_div]:overflow-hidden`}
        >
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            {companySetup.icon}
          </div>

          <p className="font-semibold">{companySetup.text}</p>
        </div>
      ))}
    </ServicesTileContainer>
  );
};

export const VisaTiles = ({ className }: { className?: string }) => {
  return (
    <ServicesTileContainer className={className}>
      {visaOptions.map((visa) => (
        <div
          key={visa.key}
          className={`bg-[#ECEFF1] hover:bg-hero-heading-v2 hover:text-white flex items-center justify-start p-2 rounded-[0.375rem] border [p_div]:overflow-hidden`}
        >
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            {visa.icon}
          </div>

          <p className="font-semibold">{visa.text}</p>
        </div>
      ))}
    </ServicesTileContainer>
  );
};

export const VatTaxTiles = ({ className }: { className?: string }) => {
  return (
    <ServicesTileContainer className={className}>
      {vatTaxOptions.map((vatService) => (
        <div
          key={vatService.key}
          className={`bg-[#ECEFF1] hover:bg-hero-heading-v2 hover:text-white flex items-center justify-start p-2 rounded-[0.375rem] border [p_div]:overflow-hidden`}
        >
          <div className="w-6 mr-2 flex-shrink-0 flex-grow-0">
            {vatService.icon}
          </div>

          <p className="font-semibold">{vatService.text}</p>
        </div>
      ))}
    </ServicesTileContainer>
  );
};

export const ServicesTileContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` ${
        className || "grid grid-cols-1 lg:grid-cols-3 gap-4 pb-3"
      }`}
    >
      {children}
    </div>
  );
};
