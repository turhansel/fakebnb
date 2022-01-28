import Head from 'next/head';
import { getSession } from 'next-auth/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import GiftCard from '../components/GiftCard';
import InspirationCard from '../components/InspirationCard';
import DiscoverExperiences from '../components/DiscoverExperiences';
import Footer from '../components/Footer';

export const Home = ({ inspirationData, discoverData }) => {
	return (
		<div className='dark:bg-dark dark:text-white'>
			<Head>
				<title>Airbnb-ish: Holiday Rentals, Cabins, Beach Houses, Unique ...</title>
				<link
					rel='icon'
					href='https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico'
				/>
			</Head>
			<div className=' '>
				<Header page='/' />
				<div
					className={` bg-gradient-to-b from-indigo-200 via-purple-100 to-white dark:bg-gradient-to-b dark:from-dark-300 dark:to-dark`}
				>
					<Banner />
					<div className='max-w-[1600px] mx-auto px-8 sm:px-16 '>
						<GiftCard />
					</div>
				</div>

				<main className='max-w-[1600px] mx-auto px-8 sm:px-16'>
					<section className='pt-6'>
						<h2 className='text-4xl font-semibold pt-14 pb-12'>Inspiration for your next trip</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{inspirationData.map(({ _id, img, location, distance, color }) => (
								<InspirationCard key={_id} id={_id} img={img} location={location} distance={distance} />
							))}
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
	const inspirationData = await fetch(`${process.env.NEXTAUTH_URL}/api/inspiration`).then((res) => res.json());
	const discoverData = await fetch(`${process.env.NEXTAUTH_URL}/api/discover`).then((res) => res.json());

	return {
		props: {
			session: await getSession(context),
			inspirationData,
			discoverData,
		},
	};
}

export default Home;
