// import { Carousel } from "@material-tailwind/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export function Slider() {
  return (
    <div className="text-center border-2 border-amber-950 h-screen">
      <h1 className="text-6xl">Slider Area</h1>
      {/* left area */}
      <div class="bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)] text-sm text-gray-500">
        {/* <!-- Hero Section --> */}
        <div class="h-[580px] flex flex-col items-center justify-center px-4 text-center">
          <div class="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 p-1 text-sm text-gray-800 max-w-full">
            <p>Click Here To Show All Reports And There Location.</p>
            <div class="flex items-center cursor-pointer gap-2 bg-white border border-gray-500/30 rounded-2xl px-3 py-1 whitespace-nowrap">
              {/* <p>Explore</p> */}
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                  stroke="#6B7280"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">
            Solutions to Reduce Garbge Dump
          </h1>
          <p class="max-w-xl text-center mt-6 px-4">
            A Garbage Reporting System is a digital platform—usually a web or
            mobile application—that allows citizens to report instances of
            improper waste disposal or uncollected garbage. The goal is to
            bridge the gap between the public and waste management authorities
            by enabling real-time communication.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button class="px-7 py-3 rounded bg-indigo-500 text-white font-medium">
              Report Here
            </button>
            <button class="group px-7 py-2.5 flex items-center gap-2 font-medium">
              Learn more
              <svg
                class="group-hover:translate-x-1 transition pt-0.5"
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                  stroke="#6B7280"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
