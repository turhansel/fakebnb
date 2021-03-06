import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import GiftCard from "../components/GiftCard";
import InspirationCard from "../components/InspirationCard";
import DiscoverExperiences from "../components/DiscoverExperiences";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Home = ({ inspirationData, discoverData }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isVisitor = localStorage.getItem("isVisitor");
      if (!(session || isVisitor === "true")) {
        router.push({
          pathname: "/login",
        });
      }
    }
  }, []);

  return (
    <div className="dark:bg-dark dark:text-white">
      <Head>
        <title>
          Airbnb-ish: Holiday Rentals, Cabins, Beach Houses, Unique ...
        </title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>
      <div className=" ">
        <Header page="/" />
        <div
          className={` bg-gradient-to-b from-indigo-200 via-purple-100 to-white dark:bg-gradient-to-b dark:from-dark-300 dark:to-dark`}
        >
          <Banner />
          <div className="mx-auto max-w-[1600px] px-8 sm:px-16 ">
            <GiftCard />
          </div>
        </div>

        <main className="mx-auto max-w-[1600px] px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="pt-14 pb-12 text-4xl font-semibold">
              Inspiration for your next trip
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {inspirationData.map(
                ({ _id, img, location, distance, color }) => (
                  <InspirationCard
                    key={_id}
                    id={_id}
                    img={img}
                    location={location}
                    distance={distance}
                  />
                )
              )}
            </div>
          </section>
          <DiscoverExperiences discoverData={discoverData} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const inspirationData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/inspiration`
  ).then((res) => res.json());
  const discoverData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/discover`
  ).then((res) => res.json());

  return {
    props: {
      session: await getSession(context),
      inspirationData,
      discoverData,
    },
  };
}

export default Home;
