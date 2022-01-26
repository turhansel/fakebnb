import Image from 'next/image';
import React from 'react';

const GiftCard = () => {
	return (
		<div className='flex items-center justify-center '>
			<div
				className='w-[800px] h-[400px]  md:w-[1600px] md:h-[800px] bg-white rounded-xl  grid grid-cols-2 gap-4 place-content-center relative px-4 py-10shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-filter-blur hover:shadow-[0_25px_40px_-15px_#ffd338] dark:hover:shadow-slate-100 dark:bg-slate-900'
			>
				<div className='flex items-center flex-col justify-center space-y-7 '>
					<span className='text-2xl'>Introducing</span>
					<h2 className='text-5xl font-semibold'>Airbnb gift cards</h2>
					<button className='bg-black text-white primary_button md:py-4 md:px-12 md:mt-4'>Shop Now</button>
				</div>
				<div className='flex items-center relative'>
					<div className='rotate-[15deg] z-20 mb-8'>
						<Image
							className='rounded-xl'
							alt='brand-gift'
							src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639923980/51CmtqNRN9L_zjvl4j.jpg'
							width={430}
							height={300}
							objectFit='cover'
						/>
					</div>

					<div className='absolute top-36 -rotate-[31deg] md:ml-64'>
						<Image
							className='rounded-xl '
							alt='brand-gift'
							src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639923984/Airbnb_Logo_Over_Gradient_kx38qc.png'
							width={430}
							height={300}
							objectFit='cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GiftCard;
