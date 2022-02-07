import { GlobeAltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-50 bg-gray-100 pt-12 pl-4 dark:bg-dark-300 dark:text-white sm:pl-0">
      <div className="container mx-auto flex flex-col flex-wrap justify-between px-10 text-left md:flex-row md:px-10">
        <div className="mb-7 space-y-4 text-sm text-gray-800 dark:text-white">
          <h5 className="font-bold">Support</h5>
          <p className="cursor-pointer hover:underline">Help Centre</p>
          <p className="cursor-pointer hover:underline">Safety information</p>
          <p className="cursor-pointer hover:underline">Cancellation options</p>
          <p className="cursor-pointer hover:underline">
            Our COVID-19 Response
          </p>
          <p className="cursor-pointer hover:underline">
            Supporting people with disabilities
          </p>
          <p className="cursor-pointer hover:underline">
            Report a neighbourhood concern
          </p>
        </div>
        <div className="mb-7 space-y-4 text-sm text-gray-800 dark:text-white">
          <h5 className="font-bold">Community</h5>
          <p className="cursor-pointer hover:underline">
            Airbnb.org: disaster relief housing
          </p>
          <p className="cursor-pointer hover:underline">
            Support Afghan refugees
          </p>
          <p className="cursor-pointer hover:underline">
            Celebrating diversity & belonging
          </p>
          <p className="cursor-pointer hover:underline">
            Combating discrimination
          </p>
        </div>
        <div className="mb-7 space-y-4 text-sm text-gray-800 dark:text-white">
          <h5 className="font-bold">Hosting</h5>
          <p className="cursor-pointer hover:underline">Try hosting</p>
          <p className="cursor-pointer hover:underline">
            AirCover: protection for Hosts
          </p>
          <p className="cursor-pointer hover:underline">
            Explore hosting resources
          </p>
          <p className="cursor-pointer hover:underline">
            Visit our community forum
          </p>
          <p className="cursor-pointer hover:underline">
            How to host responsibly
          </p>
        </div>
        <div className="mb-7 space-y-4 text-sm text-gray-800 dark:text-white">
          <h5 className="font-bold">About</h5>
          <p className="cursor-pointer hover:underline">Newsroom</p>
          <p className="cursor-pointer hover:underline">
            Learn about new features
          </p>
          <p className="cursor-pointer hover:underline">
            Letter from our founders
          </p>
          <p className="cursor-pointer hover:underline">Careers</p>
          <p className="cursor-pointer hover:underline">Investors</p>
          <p className="cursor-pointer hover:underline">Airbnb Luxe</p>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex flex-col justify-between space-y-4 border-t border-gray-300 px-10 pt-6 pb-12 text-lg text-gray-700 dark:text-white sm:flex-row sm:space-y-0 md:px-8">
        <p className="flex items-center space-x-3">
          <span>&copy;</span>
          <span>2022</span>
          <span>Turhan Sel</span>
        </p>
        <div className="flex items-center space-x-4">
          <span className="flex cursor-pointer items-center space-x-2">
            <GlobeAltIcon className="-mb-0.5 h-5 text-gray-600 dark:text-white" />
            <span className="underline ">English</span>
          </span>
          <span className="cursor-pointer underline">£ GBP</span>
          <Link href="https://www.facebook.com/profile.php?id=100075699940268">
            <a target="_blank">
              <svg
                className="stroke-gray-700 dark:stroke-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://twitter.com/imturhansel">
            <a target="_blank">
              <svg
                className="stroke-gray-700 dark:stroke-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </Link>

          <Link href="https://www.instagram.com/imturhansel/">
            <a target="_blank">
              <svg
                className="stroke-gray-700 dark:stroke-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
