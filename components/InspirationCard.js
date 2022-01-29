import Image from 'next/image';
import React from 'react';

const InspirationCard = ({ id, img, location, distance }) => {
	const inspirationColors = ['bg-rose-500', 'bg-pink-500', 'bg-rose-600', 'bg-pink-600'];

	const chooseRandomColor = (colors) => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div className={`${chooseRandomColor(inspirationColors)} rounded-xl hover:shadow-lg dark:hover:shadow-slate-100`}>
			<div className='relative h-64 max-w-96 '>
				<Image src={img} layout='fill' className='rounded-t-lg ' />
			</div>
			<div className={`relative h-64 flex flex-col px-6 py-6 space-y-5 text-white`}>
				<h2>{location}</h2>
				<span>{distance}</span>
			</div>
		</div>
	);
};

export default InspirationCard;
