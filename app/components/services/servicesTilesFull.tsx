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
import { MonitorHeartRateIcon } from "../icons/monitorHeartRate";
import { InvoiceIcon } from "../icons/invoice";
import { UserCheckIcon } from "../icons/userCheck";
import { PodiumIcon } from "../icons/podium";
import { TriangleIcon } from "../icons/triangle";
import { SettingsIcon } from "../icons/settings";
import { TrademarkCircleIcon } from "../icons/trademarkCircle";
import { LayerGroupIcon } from "../icons/layerGroup";
import { ExpandArrowsAltIcon } from "../icons/expandArrowsAlt";
import { FileShieldAltIcon } from "../icons/fileShieldAlt";
import { BullseyeIcon } from "../icons/bullseye";
import { TreesIcon } from "../icons/trees";
import { CalculatorIcon } from "../icons/calculatorAlt";
import { WalletIcon } from "../icons/wallet";
import { PathfinderUniteIcon } from "../icons/pathfinderUnite";
import { BooksIcon } from "../icons/books";
import { DesktopCloudAltIcon } from "../icons/desktopCloutAlt";
import { MoneybagAltIcon } from "../icons/moneybagAlt";
import { TickIcon } from "../icons/tick";

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
    key: "lf-2",
    text: "Professional License in Dubai, UAE",
    description: (
      <p>
        The industrial license in Dubai is specifically designed for enterprises
        and individuals engaged in offering particular professional services.
        Professionals such as doctors, engineers, teachers, lawyers,
        accountants, artisans, performing artists, and others aiming to provide
        their expertise and services directly to customers in Dubai and the UAE
        are mandated to acquire a professional license. Additionally, companies
        offering professional services are also required to obtain a
        professional license in Dubai.
      </p>
    ),
    icon: <BagAltIcon className="w-full" />,
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
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Inbound Tourism License
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Outbound Tourism License
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Travel Agent/Agency License
        </p>
      </>
    ),
    icon: <BackpackIcon className="w-full" />,
  },
];

const companySetupFullOptions = [
  {
    key: "csf-0",
    text: "Mainland Company Formation",
    description: (
      <>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Dubai Company Setup
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Sharjah Company Setup
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Abudhabi Company Setup
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Ajman Company Setup
        </p>
      </>
    ),
    icon: <MountainsIcon className="w-full" />,
  },
  {
    key: "csf-1",
    text: "OffShore Company Formation",
    description: (
      <>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Dubai Offshore
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          RAK Offshore
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Ajman Offshore
        </p>
        <p className="mb-[0.2rem]">
          <TickIcon className="inline-block w-4 mr-1 aspect-square" />
          Jabel Ali Offshore
        </p>
      </>
    ),
    icon: <WavesIcon className="w-full" />,
  },
  {
    key: "csf-2",
    text: "Freezone Company Formation",
    description: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 [&>div]:border-b-2 [&>div]:border-black/10">
        <div>
          <p className="font-semibold mb-[0.2rem]">Dubai Freezones</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            DMCC Freezone
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Jebel Ali Freezone (JAFZA)
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Dubai Silicon Oasis (DSO)
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Dubai Internet City (DIC)
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Dubai Airport Freezone (DAFZA)
          </p>
        </div>
        <div>
          <p className="font-semibold mb-[0.2rem]">Sharjah Free Zones</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Sharjah Media City
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Sharjah Airport Free Zone
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Hamriya Freezone
          </p>
        </div>
        <div>
          <p className="font-semibold mb-[0.2rem]">Abudhabi Free Zones</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Khalifa Industrial Zone
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Abudhabi Airport Freezone
          </p>
        </div>
        <div>
          <p className="font-semibold mb-[0.2rem]">Ajman Free Zones</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Ajman Freezone
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Ajman Media City
          </p>
        </div>
        <div>
          <p className="font-semibold mb-[0.2rem]">Fujairah Free Zone</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            IFZA
          </p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            Fujairah Freezone
          </p>
        </div>
        <div>
          <p className="font-semibold mb-[0.2rem]">RAK Free Zone</p>
          <p className="mb-[0.2rem]">
            <TickIcon className="inline-block w-4 mr-1 aspect-square" />
            RAK Freezone
          </p>
        </div>
      </div>
    ),
    icon: <CellsIcon className="w-full" />,
  },
];

const visaFullOptions = [
  {
    key: "vf-0",
    text: "10 Year UAE Golden Visa",
    description: (
      <>
        <p className="mb-2">
          Discover the 10-year residency visa for investors in the UAE. Apply
          now for the exclusive 10-year Gold Card, reflecting the visionary
          leadership of His Highness Sheikh Mohammed bin Rashid Al Maktoum. This
          initiative underscores the UAE&apos;s commitment to being a premier
          investor-friendly nation.
        </p>
        <p>
          Long-term visa holders are free to stay abroad without time limits,
          enjoying unrestricted entry and exit. Major-General Mohammed Al Marri
          of GDRFA-Dubai emphasizes the flexibility: &ldquo;They can freely come in
          and out of the country at their will, exempt from the rule of not
          exceeding six consecutive months outside the UAE&rdquo;.
        </p>
      </>
    ),
    icon: <PlaneIcon className="w-full" />,
  },
];

const vatTaxFullOptions = [
  {
    key: "vtf-0",
    text: "Management Consultancy",
    description: "",
    icon: <UserArrowsIcon className="w-full" />,
  },
  {
    key: "vtf-1",
    text: "Due Diligence and Business Valuation",
    description: "",
    icon: <FileSearchIcon className="w-full" />,
  },
  {
    key: "vtf-2",
    text: "Financial Consultancy",
    description: "",
    icon: <USDCircleIcon className="w-full" />,
  },
  {
    key: "vtf-3",
    text: "Virtual CFO Services",
    description: "",
    icon: <DesktopCloudAltIcon className="w-full" />,
  },
  {
    key: "vtf-4",
    text: "Corporate Finance",
    description: "",
    icon: <MoneybagAltIcon className="w-full" />,
  },
  {
    key: "vtf-5",
    text: "Mergers & Acquisition",
    description: "",
    icon: <PathfinderUniteIcon className="w-full" />,
  },
  {
    key: "vtf-6",
    text: "Accounting and Bookkeeping",
    description: "",
    icon: <BooksIcon className="w-full" />,
  },
  {
    key: "vtf-7",
    text: "Outsourced Payroll Service",
    description: "",
    icon: <WalletIcon className="w-full" />,
  },
  {
    key: "vtf-8",
    text: "Taxation",
    description: "",
    icon: <CalculatorIcon className="w-full" />,
  },
  {
    key: "vtf-9",
    text: "Company Formation",
    description: "",
    icon: <TreesIcon className="w-full" />,
  },
  {
    key: "vtf-10",
    text: "IRS Impact Assessment",
    description: "",
    icon: <BullseyeIcon className="w-full" />,
  },
  {
    key: "vtf-11",
    text: "ESR, UBO and AML Services",
    description: "",
    icon: <FileShieldAltIcon className="w-full" />,
  },
  {
    key: "vtf-12",
    text: "Liquidation of Companies",
    description: "",
    icon: <ExpandArrowsAltIcon className="w-full" />,
  },
  {
    key: "vtf-13",
    text: "Legal and Structural Changes in Organization",
    description: "",
    icon: <LayerGroupIcon className="w-full" />,
  },
  {
    key: "vtf-14",
    text: "Trade Mark Registration",
    description: "",
    icon: <TrademarkCircleIcon className="w-full" />,
  },
  {
    key: "vtf-15",
    text: "Process Design and Implementation",
    description: "",
    icon: <SettingsIcon className="w-full" />,
  },
  {
    key: "vtf-16",
    text: "International Tax Planning and Structuring",
    description: "",
    icon: <TriangleIcon className="w-full" />,
  },
  {
    key: "vtf-17",
    text: "Corporate Training & Seminars",
    description: "",
    icon: <PodiumIcon className="w-full" />,
  },
  {
    key: "vtf-18",
    text: "NRI Tax Advisory",
    description: "",
    icon: <UserCheckIcon className="w-full" />,
  },
  {
    key: "vtf-19",
    text: "Tax Residency Certificate",
    description: "",
    icon: <InvoiceIcon className="w-full" />,
  },
  {
    key: "vtf-20",
    text: "Control Implementation and Monitoring",
    description: "",
    icon: <MonitorHeartRateIcon className="w-full" />,
  },
];

export const LicensingTilesFull = ({ className }: { className?: string }) => {
  return (
    <ServicesTileFullContainer className={className}>
      {licensingFullServices.map((license) => (
        <div
          key={license.key}
          className={`bg-card-secondary text-white p-2 rounded-[0.375rem]`}
        >
          <div className="flex items-center justify-start [p_div]:overflow-hidden mb-2">
            <div className="flex-grow-0 flex-shrink-0 w-6 mr-2">
              {license.icon}
            </div>

            <p className="font-semibold">{license.text}</p>
          </div>
          {license.description}
        </div>
      ))}
    </ServicesTileFullContainer>
  );
};

export const CompanySetupTilesFull = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <ServicesTileFullContainer className={className}>
      {companySetupFullOptions.map((companySetup) => (
        <div
          key={companySetup.key}
          className={`bg-card-secondary text-white p-2 rounded-[0.375rem]`}
        >
          <div className="flex items-center justify-start [p_div]:overflow-hidden mb-2">
            <div className="flex-grow-0 flex-shrink-0 w-6 mr-2">
              {companySetup.icon}
            </div>

            <p className="font-semibold">{companySetup.text}</p>
          </div>
          {companySetup.description}
        </div>
      ))}
    </ServicesTileFullContainer>
  );
};

export const VisaTilesFull = ({ className }: { className?: string }) => {
  return (
    <ServicesTileFullContainer className={className}>
      {visaFullOptions.map((visa) => (
        <div
          key={visa.key}
          className={`bg-card-secondary text-white p-2 rounded-[0.375rem]`}
        >
          <div className="flex items-center justify-start [p_div]:overflow-hidden mb-2">
            <div className="flex-grow-0 flex-shrink-0 w-6 mr-2">
              {visa.icon}
            </div>

            <p className="font-semibold">{visa.text}</p>
          </div>
          {visa.description}
        </div>
      ))}
    </ServicesTileFullContainer>
  );
};

export const VatTaxTilesFull = ({ className }: { className?: string }) => {
  return (
    <div
      className={` ${
        className || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-3"
      }`}
    >
      {vatTaxFullOptions.map((vatService) => (
        <div
          key={vatService.key}
          className={`bg-card-secondary text-white p-2 rounded-[0.375rem]`}
        >
          <div className="flex items-center justify-start [p_div]:overflow-hidden">
            <div className="flex-grow-0 flex-shrink-0 w-6 mr-2">
              {vatService.icon}
            </div>

            <p className="font-semibold">{vatService.text}</p>
          </div>
          {vatService.description}
        </div>
      ))}
    </div>
  );
};

export const ServicesTileFullContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` ${className || "grid grid-cols-1 gap-4 pb-3"}`}>
      {children}
    </div>
  );
};
