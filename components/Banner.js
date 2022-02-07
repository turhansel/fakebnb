import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="h-screen w-screen overflow-hidden ">
        <Image
          alt="mountain"
          src="/airbnb/mountains_drnzls.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="absolute left-4 bottom-32 flex flex-col items-center  md:left-1/3">
        <p className="2xl:line-height-70 sm:line-height-45 max-w-sm-[20px] text-center text-3xl font-semibold text-white sm:text-left sm:text-[35px] 2xl:text-[50px]">
          Not sure where to go? Perfect.
        </p>
        <button className="my-5 rounded-full bg-white py-2 px-4 font-medium shadow-md transition duration-150 active:scale-90 dark:bg-dark-300 md:py-4 md:px-8 ">
          <span className=" bg-gradient-to-br from-[#6F019C] to-[#C6017E] bg-clip-text text-transparent dark:text-white md:text-lg">
            I'm flexible
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
