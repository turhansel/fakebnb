import { GlobeAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-100 pt-12 z-50 dark:bg-dark-300 dark:text-white pl-4 sm:pl-0'>
			<div className='container mx-auto px-10 md:px-10 flex justify-between text-left flex-wrap flex-col md:flex-row'>
				<div className='space-y-4 text-sm text-gray-800 mb-7 dark:text-white'>
					<h5 className='font-bold'>Support</h5>
					<p className='hover:underline cursor-pointer'>Help Centre</p>
					<p className='hover:underline cursor-pointer'>Safety information</p>
					<p className='hover:underline cursor-pointer'>Cancellation options</p>
					<p className='hover:underline cursor-pointer'>Our COVID-19 Response</p>
					<p className='hover:underline cursor-pointer'>Supporting people with disabilities</p>
					<p className='hover:underline cursor-pointer'>Report a neighbourhood concern</p>
				</div>
				<div className='space-y-4 text-sm text-gray-800 mb-7 dark:text-white'>
					<h5 className='font-bold'>Community</h5>
					<p className='hover:underline cursor-pointer'>Airbnb.org: disaster relief housing</p>
					<p className='hover:underline cursor-pointer'>Support Afghan refugees</p>
					<p className='hover:underline cursor-pointer'>Celebrating diversity & belonging</p>
					<p className='hover:underline cursor-pointer'>Combating discrimination</p>
				</div>
				<div className='space-y-4 text-sm text-gray-800 mb-7 dark:text-white'>
					<h5 className='font-bold'>Hosting</h5>
					<p className='hover:underline cursor-pointer'>Try hosting</p>
					<p className='hover:underline cursor-pointer'>AirCover: protection for Hosts</p>
					<p className='hover:underline cursor-pointer'>Explore hosting resources</p>
					<p className='hover:underline cursor-pointer'>Visit our community forum</p>
					<p className='hover:underline cursor-pointer'>How to host responsibly</p>
				</div>
				<div className='space-y-4 text-sm text-gray-800 mb-7 dark:text-white'>
					<h5 className='font-bold'>About</h5>
					<p className='hover:underline cursor-pointer'>Newsroom</p>
					<p className='hover:underline cursor-pointer'>Learn about new features</p>
					<p className='hover:underline cursor-pointer'>Letter from our founders</p>
					<p className='hover:underline cursor-pointer'>Careers</p>
					<p className='hover:underline cursor-pointer'>Investors</p>
					<p className='hover:underline cursor-pointer'>Airbnb Luxe</p>
				</div>
			</div>
			<div className='container mx-auto mt-6 border-t text-gray-700 text-lg dark:text-white border-gray-300 pt-6 pb-12 flex flex-col space-y-4 px-10 md:px-8 sm:space-y-0 sm:flex-row justify-between'>
				<p className='flex items-center space-x-3'>
					<span>&copy;</span>
					<span>2022</span>
					<span>Turhan Sel</span>
				</p>
				<div className='flex items-center space-x-4'>
					<span className='flex items-center space-x-2 cursor-pointer'>
						<GlobeAltIcon className='-mb-0.5 h-5 text-gray-600 dark:text-white' />
						<span className='underline '>English</span>
					</span>
					<span className='underline cursor-pointer'>£ GBP</span>
					<Link href='https://www.facebook.com/profile.php?id=100075699940268'>
						<a target='_blank'>
							<svg
								className='stroke-gray-700 dark:stroke-gray-200'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
							</svg>
						</a>
					</Link>
					<Link href='https://twitter.com/imturhansel'>
						<a target='_blank'>
							<svg
								className='stroke-gray-700 dark:stroke-gray-200'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
							</svg>
						</a>
					</Link>

					<Link href='https://www.instagram.com/imturhansel/'>
						<a target='_blank'>
							<svg
								className='stroke-gray-700 dark:stroke-gray-200'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
								<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
							</svg>
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
