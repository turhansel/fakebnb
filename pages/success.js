import { CheckCircleIcon } from '@heroicons/react/solid';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import Header from '../components/Header';
import Login from '../components/Login';
import Head from 'next/head';
import Image from 'next/image';

const Success = () => {
	const router = useRouter();

	return (
		<div className='bg-gray-100 h-screen'>
			<Head>
				<title>Your location has been booked!</title>
				<link
					rel='icon'
					href='https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico'
				/>
			</Head>

			<Header />
			<div className=' mx-auto h-[80vh] flex items-center justify-center overflow-y-hidden'>
				<div className='flex flex-col'>
					<div className='flex justify-center justify my-6'>
						<img src='https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif' />
					</div>
					<div className='flex items-center justify-center space-x-2 mb-5'>
						<CheckCircleIcon className='text-green-500 h-10' />
						<h1 className='text-3xl font-semibold'>
							Thank you, your vacation has been successfully booked!
						</h1>
					</div>
					<button
						onClick={() => router.push('/')}
						className='bg-red-400 rounded-xl font-semibold py-2 mt-8 text-white'
					>
						Return to Home
					</button>
				</div>
			</div>
		</div>
	);
};

export default Success;
