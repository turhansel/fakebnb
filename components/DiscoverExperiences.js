import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-reveal';


const DiscoverExperiences = ({ discoverData }) => {
	return (
		<Fade left>
			<section className='pt-6'>
				<h2 className='text-4xl font-semibold pt-14 '>
					Discover Airbnb Experiences
				</h2>
				<div className='grid grid-cols-1  xl:grid-cols-2 gap-9 '>
					{discoverData.map(({ _id, img, description, buttonText }) => (
						<div
							key={_id}
							className='relative my-16 transition transform duration-150  '
						>
							<div className='relative min-w-[300px] h-[788px]'>
								<Image
									src={img}
									layout='fill'
									objectFit='cover'
									className='rounded-2xl'
								/>
							</div>

							<div className='absolute top-24 left-16'>
								<p className='md:text-5xl text-3xl text-white font-normal md:max-w-[300px]'>{description}</p>
								<button className='primary_button mt-7 py-4 px-6'>{buttonText}</button>
							</div>
						</div>
					))}
				</div>

				<div className='relative my-16 transition transform duration-150'>
					<div className='relative min-w-[300px] h-[788px]'>
						<Image
							src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1642448877/discover-host_yzcklj.jpg'
							layout='fill'
							objectFit='cover'
							className='rounded-2xl'
						/>
					</div>

					<div className='absolute top-16 md:top-32 left-16 md:left-32 flex flex-col justify-between'>
						<p className='md:text-7xl text-3xl text-white font-normal md:max-w-[300px]'>Questions about hosting?</p>
						<button className='primary_button py-4 px-6 mt-56'>Ask a Superhost</button>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default DiscoverExperiences;
