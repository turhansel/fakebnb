import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-reveal';


const DiscoverExperiences = ({ discoverData }) => {
	return (
		<Fade bottom>
			<section className='pt-6'>
				<h2 className='text-4xl font-semibold pt-14 pb-12'>
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

							<div className='absolute top-16 left-12'>
								<p>{description}</p>
								<button className='primary_button'>{buttonText}</button>
							</div>
						</div>
					))}
				</div>

				<div className='relative my-16 transition transform duration-150'>
					<div className='relative min-w-[300px] h-[788px]'>
						<Image
							src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1641072534/GB_SE-307351_25_1640_R_uqswxg.webp'
							layout='fill'
							objectFit='cover'
							className='rounded-2xl'
						/>
					</div>

					<div className='absolute top-16 left-12'>
						<p>Questions about hosting?</p>
						<button className='primary_button'>Ask a Superhost</button>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default DiscoverExperiences;
