export const container =
  "w-11/12 bg-white flex flex-col rounded-xl shadow-lg px-6 py-8 justify-between mb-10";

export const buttonSmall =
  "text-gray-900 bg-gradient-to-br border-gray-300 shadow-md from-sky-100 to-lime-100 hover:bg-gradient-to-l hover:from-sky-100 hover:to-lime-100 focus:ring-2 focus:outline-none focus:ring-lime-200  active:translate-y-1 transition duration-150 ease-in-out font-medium rounded-lg text-sm px-3 py-2 text-center hover:cursor-pointer";

export const buttonContainer = " w-full mt-3";

export const input =
  "peer w-full border border-gray-300 rounded-lg px-3 pt-4 pb-2 my-3 focus:outline-none focus:ring-1 focus:ring-sky-800 focus:border-sky-800";

export const textarea = input + " h-50 scrollbar-textarea";

export const additional =
  input +
  " min-h-35 my-4 scrollbar-textarea focus-within:outline-none focus-within:ring-1 focus-within:ring-sky-800 focus-within:border-sky-800";

export const labelcss =
  "absolute left-3 top-0.5 bg-white px-1 text-gray-400 text-sm transform scale-100 transition-all peer-placeholder-shown:top-6.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0.5 peer-focus:scale-90 peer-focus:text-sky-800 peer-focus:italic";

export const h2 = "text-left text-sky-800 font-semibold pl-2.5 text-xl mb-3";

export const icon = "size-5 text-sky-800 hover:text-lime-400 group-focus:text-lime-400";

export const iconAdd =
  "size-7 border-3 border-lime-100 rounded-full mx-5 bg-lime-100 text-sky-800  shadow-md hover:size-8 group-focus:size-8";

export const buttonActive = "active:translate-y-0.5 group hover:cursor-pointer";

export const addLabel =
  "absolute left-3 top-1.5 bg-white px-1 text-gray-400 text-sm transform scale-100 transition-all   peer-focus-within:scale-90 peer-focus-within:text-sky-800 peer-focus-within:italic";

export const addInput =
  "peer w-3/4 border border-gray-300 rounded-lg px-3 pt-2 pb-2 mb-1 mt-4 text-sm focus:outline-none focus:ring-1 focus:ring-sky-800 focus:border-sky-800 focus:bg-sky-50 justify-self-start placeholder:text-xs placeholder:text-gray-400";

export const options =
  "flex justify-between w-full border-2 border-lime-100 rounded-lg px-3  py-1.5 my-3 bg-lime-50 bg-opacity-50 text-sm";

export const addButtonInner =
  "px-2 text-sm my-1 mx-3 h-fit flex justify-start items-center w-fit max-w-full rounded-lg border-2 border-sky-100 bg-sky-50 ";

export const addButtonInnerIcon = "size-4 ml-2 mr-1 text-sky-800 hover:text-lime-400 ";

export const requiredcss = " after:content-['*'] after:text-red-500 after:ml-1 ";

export const warningcss =
  "relative h-0 text-[0.65rem] -top-19 text-end  text-red-500 italic";

export const hr =
  "h-0.5 mb-1 mx-2 bg-sky-800 border-0 rounded-full w-1/4   -translate-y-2 ";

export const cv = {
  resume: " w-[950px] bg-white shrink-0 py-10 px-10 min-h-[250px] flex m-10",

  header: "text-[22px] font-semibold text-sky-800 italic text-start mt-8",

  left: "w-5/7",
  leftInner: "w-full mb-5 pr-10",

  basicInfo: "flex flex-col items-start justify-start",
  h1: "text-[40px] leading-none font-bold text-sky-800 ",
  h2: "text-[28px] font-light italic text-sky-800",
  sum: "text-[16px] text-justify pt-5",

  headerDiv: "flex justify-start items-center mt-4",
  headerDivInner: "w-full flex justify-between items-center",
  headerIcon: "size-[12px] mr-2 text-sky-900",
  title: "text-[18px] font-medium",
  date: "text-[13px] font-light italic",
  hr: "h-0.5 mb-1  bg-sky-800 border-0 rounded-full w-full translate-y-0.5   ",

  subHeader: "text-[16px] text-start pl-5 mb-1 leading-none font-light italic",
  list: "pl-5 text-start",

  right: "w-2/7",
  rightInner: "w-full pl-4 border-l-2 border-sky-800 justify-self-end mb-10 text-start",

  divIcon: "text-[16px] flex items-center my-3 italic ",
  icon: "size-[18px] text-sky-800 mr-5",

  category: "mb-3",
  categoryHeader: "text-[16px] ml-2 font-medium",
  li: "text-[14px] list-disc ml-10 marker:text-sky-800",
};
