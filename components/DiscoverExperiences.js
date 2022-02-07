import Image from "next/image";
import React from "react";

const DiscoverExperiences = ({ discoverData }) => {
  return (
    <section className="pt-6">
      <h2 className="pt-14 text-4xl font-semibold ">
        Discover Airbnb Experiences
      </h2>
      <div className="grid grid-cols-1  gap-9 xl:grid-cols-2 ">
        {discoverData.map(({ _id, img, description, buttonText }) => (
          <div
            key={_id}
            className="relative my-16 transform rounded-3xl transition duration-150 hover:shadow-lg dark:hover:shadow-slate-100"
          >
            <div className="relative h-[788px] min-w-[300px]">
              <Image
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            <div className="absolute top-24 left-16">
              <p className="text-3xl font-normal text-white md:max-w-[300px] md:text-5xl">
                {description}
              </p>
              <button className="primary_button mt-7 py-4 px-6">
                {buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mb-16 transform rounded-3xl transition duration-150 hover:shadow-lg dark:hover:shadow-slate-100">
        <div className="relative h-[788px] min-w-[300px]">
          <Image
            src="/airbnb/discover-host_yzcklj.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        <div className="absolute top-16 left-16 flex flex-col justify-between md:top-32 md:left-32">
          <p className="text-3xl font-normal text-white md:max-w-[300px] md:text-7xl">
            Questions about hosting?
          </p>
          <button className="primary_button mt-56 py-4 px-6">
            Ask a Superhost
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverExperiences;
