import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Header = ({ placeholder, page }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    setSearchInput("");
  };

  const [searchStatus, setSearchStatus] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogin = () => {
    if (session) {
      signOut();
    } else {
      router.push({
        pathname: "/login",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 ">
      <div
        className={
          !searchStatus
            ? `grid grid-cols-2 bg-white shadow-md transition duration-300 ease-in-out dark:bg-dark sm:grid-cols-3 md:px-10 ${
                !scroll &&
                `${
                  page === "/" || page === "/search"
                    ? "bg-transparent shadow-none"
                    : "bg-white "
                }`
              } p-5 ${searchInput && "-mb-90"}`
            : `flex bg-white transition duration-300 ease-in-out dark:bg-dark ${
                searchInput && "-mb-90 flex-col"
              } shadow-md ${
                !scroll &&
                `${
                  page == "/"
                    ? "bg-transparent shadow-none"
                    : "bg-white dark:bg-dark"
                }`
              } p-5`
        }
      >
        {/* Left - Airbnb Logo */}
        <div
          onClick={() => router.push("/")}
          className={
            !searchStatus
              ? "relative my-auto flex h-10 cursor-pointer items-center"
              : "hidden"
          }
        >
          <Image
            src="/airbnb/Airbnb_Logo_Be%CC%81lo_qe23zq.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            loading="lazy"
          />
        </div>

        {/* Middle - Search */}
        <div
          className={
            !searchStatus
              ? "hidden items-center rounded-full bg-white py-2 dark:bg-dark-300 sm:flex md:border-2 md:shadow-sm"
              : "flex flex-grow items-center rounded-full border-2 bg-white py-2 shadow-sm dark:bg-dark-300"
          }
        >
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="ml-5 flex-grow bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none dark:text-white"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon
            className={
              !searchStatus
                ? "hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex"
                : "mx-2 inline-flex h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white"
            }
          />
        </div>

        {/* Right - Icons */}
        <div
          className={`flex items-center justify-end space-x-4 transition duration-200 ease-in-out ${
            !scroll && `${page == "/" ? "text-white" : "text-gray-600"}`
          }`}
        >
          {searchStatus ? (
            <XIcon
              onClick={() => setSearchStatus(false)}
              className={`ml-5 h-7 cursor-pointer ${searchInput && "hidden"}`}
            />
          ) : (
            <>
              <p className="hidden cursor-pointer dark:text-gray-300 md:inline">
                Become a host
              </p>
              <SearchIcon
                onClick={() => setSearchStatus(true)}
                className="h-6 cursor-pointer sm:hidden"
              />
              {theme === "dark" ? (
                <SunIcon
                  className="h-6 cursor-pointer text-yellow-200"
                  onClick={changeTheme}
                />
              ) : (
                <MoonIcon
                  className="h-6 cursor-pointer"
                  onClick={changeTheme}
                />
              )}
              <div className="flex items-center space-x-2 rounded-full border-2 bg-white p-2 text-gray-600 dark:border-dark-300 dark:bg-dark dark:text-white">
                <MenuIcon
                  className={`h-6 cursor-pointer ${
                    session?.user.image && "mr-2"
                  }`}
                />
                {session?.user.image ? (
                  <Image
                    src={session.user.image}
                    height={24}
                    width={24}
                    onClick={handleLogin}
                    unoptimized="true"
                    className="cursor-pointer rounded-full"
                  />
                ) : (
                  <UserCircleIcon
                    className="h-6 cursor-pointer"
                    onClick={handleLogin}
                  />
                )}
              </div>
            </>
          )}
        </div>

        {searchInput && (
          <div className="col-span-3 mx-auto mt-5 flex max-w-2xl flex-col rounded-xl bg-white p-5 dark:text-dark-300 ">
            <div className="hidden sm:inline-flex">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="inline-flex sm:hidden ">
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="mb-4 flex items-center border-b ">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg text-red-400 outline-none dark:bg-dark-300 dark:text-white"
              />
            </div>
            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={handleSearch} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
