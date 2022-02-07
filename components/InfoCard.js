import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { postData } from "../lib/httpClient";

const stripePromise = loadStripe(process.env.stripe_public_key);

const InfoCard = ({ setSelectedLocation, selectedLocation, searchResults }) => {
  const { data: session } = useSession();
  const [favList, setFavList] = useState([]);

  const findSelectedLocationInsideOfSearchResult = () => {
    let findedLocation = [];
    if (selectedLocation) {
      findedLocation.push(
        searchResults.find((x) => x._id === selectedLocation)
      );
    }
    return findedLocation;
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await postData("/api/create-checkout-session", {
      items: findSelectedLocationInsideOfSearchResult(),
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  const onFav = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    let favId = id;
    if (favList.includes(id)) {
      setFavList(favList.filter((item) => item !== id));
    } else {
      setFavList([...favList, favId]);
    }
  };

  return searchResults.map(
    ({ _id, img, location, title, description, star, price, total }) => (
      <div
        key={_id}
        className="flex flex-col items-center space-y-5 rounded-2xl bg-white py-4 px-4 shadow-md hover:shadow-md dark:bg-gray-700  dark:hover:shadow-slate-200 sm:flex-row sm:space-y-0"
        onClick={() => setSelectedLocation(_id)}
      >
        <div className="relative h-44 w-full flex-shrink-0 transform cursor-pointer transition duration-200  ease-out hover:scale-105 md:h-56 md:w-80 lg:h-60 lg:w-80">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority={false}
            unoptimized="true"
          />
        </div>
        <div className="flex flex-grow flex-col sm:pl-5 ">
          <div className="flex items-center justify-between">
            <p>{location}</p>
            <HeartIcon
              className={`h-7 cursor-pointer  ${
                favList.includes(_id) ? "text-red-700" : "text-gray-400"
              }`}
              onClick={(e) => onFav(e, _id)}
            />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="w-10 border-b pt-2" />
          <p className="flex-grow pt-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-end justify-between py-5">
            <p className="flex items-center">
              <StarIcon className="h-5 transform text-red-400 transition duration-200 ease-out hover:scale-110" />
              {star}
            </p>
            <div className="-mt-2 flex flex-col justify-end">
              <p className="pb-2 text-lg font-semibold lg:text-2xl">
                £{price} GBP / night
              </p>
              <p className="text-right font-extralight">£{total} GBP total</p>
              {session ? (
                <button
                  className="mt-2 transform rounded-xl bg-red-400 py-1.5 px-3 text-center font-semibold text-white shadow-md transition duration-200 ease-out hover:scale-105 active:scale-90"
                  onClick={createCheckoutSession}
                  role="link"
                >
                  {"Booking"}
                </button>
              ) : (
                <Link href="/login">
                  <a
                    className="mt-2 transform rounded-xl bg-red-400 py-1.5 px-3 text-center font-semibold text-white shadow-md transition duration-200 ease-out hover:scale-105 active:scale-90"
                    role="link"
                  >
                    {"Sign in to book"}
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoCard;
