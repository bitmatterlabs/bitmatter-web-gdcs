export const OnlineBubble = ({
  bubbleText = "Available",
}: {
  bubbleText?: string;
}) => {
  return (
    <span className="inline-block">
      <span className="flex items-center py-[0.2rem] px-[0.5rem] space-x-1 bg-black rounded-full">
        <span className="relative flex w-3 h-3">
          <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
        <span className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-medium text-white pr-1">
          {` ${bubbleText}`}
        </span>
      </span>
    </span>
  );
};
