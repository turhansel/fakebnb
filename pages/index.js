import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Login from '../components/Login';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import GiftCard from '../components/GiftCard';
import { Fade } from 'react-reveal';
import InspirationCard from '../components/InspirationCard';
import DiscoverExperiences from '../components/DiscoverExperiences';
import Footer from '../components/Footer';

export const Home = ({ inspirationData, discoverData }) => {
	const { data: session } = useSession();

	if (!session) return <Login />;
	if (session) {
		return (
			<div>
				<Head>
					<title>
						Airbnb-ish: Holiday Rentals, Cabins, Beach Houses, Unique ...
					</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				{/* <Layout inspirationData={inspirationData} discoverData={discoverData} /> */}
				<Header page='/' />
				<header className='bg-gradient-to-b from-indigo-200 via-purple-100 to-white'>
					<Banner />
					<div className='container mx-auto px-8 sm:px-16 '>
						<GiftCard />
					</div>
				</header>

				<main className='max-w-[1600px] mx-auto px-8 sm:px-16 '>
					<Fade bottom>
						<section className='pt-6'>
							<h2 className='text-4xl font-semibold pt-14 pb-12'>
								Inspiration for your next trip
							</h2>

							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
								{inspirationData.map(
									({ _id, img, location, distance, color }) => (
										<InspirationCard
											key={_id}
											id={_id}
											img={img}
											location={location}
											distance={distance}
											color={color}
										/>
									)
								)}
							</div>
						</section>
					</Fade>
					<DiscoverExperiences discoverData={discoverData} />
				</main>

				<Footer />
			</div>
		);
	}
};

export async function getServerSideProps() {
	const inspirationData = await fetch(
		`${process.env.NEXTAUTH_URL}/api/inspiration`
	).then((res) => res.json());
	const discoverData = await fetch(
		`${process.env.NEXTAUTH_URL}/api/discover`
	).then((res) => res.json());

	return {
		props: {
			inspirationData,
			discoverData,
		},
	};
}

export default Home;
