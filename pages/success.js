import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Head from "next/head";

const Success = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-100 dark:bg-dark-300">
      <Head>
        <title>Your location has been booked!</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>

      <Header />
      <div className=" mx-auto flex h-[80vh] items-center justify-center overflow-y-hidden">
        <div className="flex flex-col">
          <div className="justify my-6 flex justify-center">
            <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif" />
          </div>
          <div className="mb-5 flex items-center justify-center space-x-2">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl font-semibold">
              Thank you, we have successfully booked your vacation!
            </h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="mt-8 rounded-xl bg-red-400 py-2 font-semibold text-gray-200"
          >
            Keep traveling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
