import Image from "next/image";
import React from "react";

const GiftCard = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="py-10shadow-lg backdrop-filter-blur  relative grid h-[400px] w-[800px]  grid-cols-2 place-content-center gap-4 rounded-xl border border-gray-200 bg-white bg-opacity-60 bg-clip-padding px-4 hover:shadow-[0_25px_40px_-15px_#ffd338] dark:bg-slate-900 dark:hover:shadow-slate-100 sm:rounded-3xl sm:p-20 md:h-[800px] md:w-[1600px]">
        <div className="flex flex-col items-center justify-center space-y-7 ">
          <span className="text-2xl">Introducing</span>
          <h2 className="text-5xl font-semibold">Airbnb gift cards</h2>
          <button className="primary_button bg-black text-white md:mt-4 md:py-4 md:px-12">
            Shop Now
          </button>
        </div>
        <div className="relative flex items-center">
          <div className="z-20 mb-8 rotate-[15deg]">
            <Image
              className="rounded-xl"
              alt="brand-gift"
              src="/airbnb/51CmtqNRN9L_zjvl4j.jpg"
              width={430}
              height={300}
              objectFit="cover"
            />
          </div>

          <div className="absolute top-36 -rotate-[31deg] md:ml-64">
            <Image
              className="rounded-xl "
              alt="brand-gift"
              src="/airbnb/Airbnb_Logo_Over_Gradient_kx38qc.png"
              width={430}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
