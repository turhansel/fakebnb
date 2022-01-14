import React, { useState } from 'react';
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
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Map from '../components/Map';
import { getCenter } from 'geolib';

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

	const coordinates = searchResults.map((coordinate) => ({
		longitude: coordinate.long,
		latitude: coordinate.lat,
	}));

	// center of the locations
	const centerOfLocations = getCenter(coordinates);

	const [selectedLocation, setSelectedLocation] = useState({});

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: centerOfLocations.latitude,
		longitude: centerOfLocations.longitude,
		zoom: 11,
	});

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
					<p className='search_button flex items-center justify-between'>
						Price
						<ChevronDownIcon className='h-5 ' />
					</p>
					<p className='search_button flex items-center justify-between'>
						Type of Place
						<ChevronDownIcon className='h-5 ' />
					</p>
					<div className='divide-y divide-gray-400 hover:divide-y-8'></div>
					<p className='search_button'>Free cancellation</p>
					<p className='search_button'>Wifi</p>
					<p className='search_button'>Kitchen</p>
					<p className='search_button'>Washing machine</p>
					<p className='search_button'>Free Parking</p>
					<p className='search_button'>Hut tub</p>
					<p className='search_button'>Self check-in</p>
					<p className='search_button'>Dryer</p>
					<p className='search_button'>Decicated workspace</p>
					<p className='search_button'>Iron</p>
					<p className='search_button'>Indoor fireplace</p>
					<p className='search_button'>Gym</p>
					<p className='search_button flex items-center justify-between'>
						Filters
						<ArrowSmDownIcon className='h-5 ' />
					</p>
				</div>
			</div>

			<main className='flex bg-gray-100'>
				<section className='overflow-scroll'>
					<div className='flex flex-col bg-gray-100 px-6 my-5 space-y-5 lg:max-w-[900px] '>
						<div className='bg-white'>
							<p className='text-xs'>
								300+ stays in {location.charAt(0).toUpperCase() + location.slice(1)}
							</p>
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
									setSelectedLocation={setSelectedLocation}
								/>
							))}
						</div>
						<div className='flex pt-6 items-center text-white lg:px-10'>
							<button
								className='mr-auto bg-white text-gray-600 hover:border-2 border-gray-600 pagination_item '
								aria-label='previous'
							>
								<ArrowSmLeftIcon />
							</button>
							<span className='pagination_item bg-gray-900'>1</span>
							<span className='pagination_item '>2</span>
							<span className='pagination_item'>3</span>
							<span className='text-gray-600'>...</span>
							<span className='pagination_item'>8</span>
							<span className='pagination_item'>9</span>
							<button
								className='ml-auto bg-white text-gray-600 hover:border-2 border-gray-600 pagination_item'
								aria-label='next'
							>
								<ArrowSmRightIcon />
							</button>
						</div>
					</div>
				</section>

				<section className='hidden xl:inline-flex xl:min-w-[1000px] h-screen sticky top-20'>
					<Map
						searchResults={searchResults}
						viewport={viewport}
						setViewport={setViewport}
						selectedLocation={selectedLocation}
						setSelectedLocation={setSelectedLocation}
					/>
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
