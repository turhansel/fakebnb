import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/solid';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { postData } from '../lib/httpClient';

const stripePromise = loadStripe(process.env.stripe_public_key);

const InfoCard = ({ setSelectedLocation, selectedLocation, searchResults }) => {
	const { data: session } = useSession();
	const [fav, setFav] = useState(false);

	const findSelectedLocationInsideOfSearchResult = () => {
		let findedLocation = [];
		if (selectedLocation) {
			findedLocation.push(searchResults.find((x) => x._id === selectedLocation));
		}
		return findedLocation;
	};

	const createCheckoutSession = async () => {
		const stripe = await stripePromise;
		const checkoutSession = await postData('/api/create-checkout-session', {
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

	return searchResults.map(({ _id, img, location, title, description, star, price, total }) => (
		<div
			key={_id}
			className='flex flex-col sm:flex-row items-center py-4 px-4 border-b shadow-md hover:shadow-lg space-y-5 sm:space-y-0  bg-white rounded-2xl'
			onClick={() => setSelectedLocation(_id)}
		>
			<div className='relative h-44 w-72 md:h-52 md:w-80 flex-shrink-0 hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
				<Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' priority={false} />
			</div>
			<div className='flex flex-col flex-grow sm:pl-5'>
				<div className='flex items-center justify-between'>
					<p>{location}</p>
					<HeartIcon
						className={`h-7 cursor-pointer  ${fav ? 'text-red-700' : 'text-gray-400'}`}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setFav(!fav);
						}}
					/>
				</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2' />
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
				<div className='flex items-end justify-between py-5'>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-red-400' />
						{star}
					</p>
					<div className='flex flex-col justify-end -mt-2'>
						<p className='text-lg lg:text-2xl font-semibold pb-2'>£{price} GBP / night</p>
						<p className='text-right font-extralight'>£{total} GBP total</p>
						<button
							className='bg-red-400 py-1.5 rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3'
							onClick={createCheckoutSession}
							role='link'
						>
							{!session ? 'Sign in to book' : 'Booking'}
						</button>
					</div>
				</div>
			</div>
		</div>
	));
};

export default InfoCard;
