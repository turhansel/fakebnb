import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Head from 'next/head';
import InfoCard from '../components/InfoCard';
import { ArrowSmDownIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Map from '../components/Map';

const Search = ({ locations }) => {
	const { data: session } = useSession();
	if (!session) return <Login />;
	const router = useRouter();

	const { location, startDate, endDate, noOfGuests } = router.query;

	const formattedStartDate = format(new Date(startDate), 'MMMM dd, yyyy');
	const formattedEndDate = format(new Date(endDate), 'MMMM dd, yyyy');
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	let searchResults = locations?.[0]?.london;
	const replacedLocation = location.replace(/\s+/g, '').toLocaleLowerCase();

	if (replacedLocation === 'london') {
		searchResults = locations?.[0]?.london;
	}

	if (replacedLocation === 'newyork') {
		searchResults = locations?.[0]?.newyork;
	}

	return (
		<>
			<Head>
				<title>Stays in {location}</title>
				<link
					rel='icon'
					href='https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico'
				/>
			</Head>

			<Header
				placeholder={`${location} | ${range} | ${noOfGuests} ${noOfGuests === 1 ? 'guest' : 'guests'}`}
				page='/search'
			/>
			<div className='px-6 border-b pt-4 shadow-md bg-white'>
				<div className='hidden lg:inline-flex mb-5 space-x-2 text-gray-700 whitespace-nowrap text-sm'>
					<p className='search-button flex items-center justify-between'>
						Price
						<ChevronDownIcon className='h-5 ' />
					</p>
					<p className='search-button flex items-center justify-between'>
						Type of Place
						<ChevronDownIcon className='h-5 ' />
					</p>
					<div className='divide-y divide-gray-400 hover:divide-y-8'></div>
					<p className='search-button'>Free cancellation</p>
					<p className='search-button'>Wifi</p>
					<p className='search-button'>Kitchen</p>
					<p className='search-button'>Washing machine</p>
					<p className='search-button'>Free Parking</p>
					<p className='search-button'>Hut tub</p>
					<p className='search-button'>Self check-in</p>
					<p className='search-button'>Dryer</p>
					<p className='search-button'>Decicated workspace</p>
					<p className='search-button'>Iron</p>
					<p className='search-button'>Indoor fireplace</p>
					<p className='search-button'>Gym</p>
					<p className='search-button flex items-center justify-between'>
						Filters
						<ArrowSmDownIcon className='h-5 ' />
					</p>
				</div>
			</div>

			<main className='flex bg-gray-100'>
				<section className='overflow-scroll'>
					<div className='flex flex-col bg-gray-100 px-6 my-5 space-y-5 lg:max-w-[900px] '>
						<div className='bg-white'>
							<p className='text-xs'>300+ stays in London {location}</p>
							<p className='text-xs text-gray-600 font-semibold mt-2 mb-6'>
								{range} - {noOfGuests} {noOfGuests == 1 ? 'guest' : 'guests'}
							</p>
							<p className='flex items-center '>
								<Image
									src='https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-trophy.9ee78aa12d1a51a64b1dc566a4391ba5.gif'
									width={40}
									height={40}
								/>
								More than 1,000,000 guests have stayed in London. On average they rated their stays 4.7
								out of 5 stars.
							</p>
						</div>
						<div className='flex flex-col bg-gray-100 px-6 my-5 space-y-5'>
							{searchResults.map(({ _id, img, location, title, description, star, price, total }) => (
								<InfoCard
									key={_id}
									id={_id}
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							))}
						</div>
					</div>
				</section>

				<section className='hidden xl:inline-flex xl:min-w-[1000px] h-screen sticky top-20'>
					<Map searchResults={searchResults} />
				</section>
			</main>

			<Footer />
		</>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession(context);

	const locations = await fetch(`${process.env.NEXTAUTH_URL}/api/locations`).then((res) => res.json());

	return {
		props: {
			session,
			locations,
		},
	};
}

export default Search;
