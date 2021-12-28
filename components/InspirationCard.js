import Image from 'next/image'
import React from 'react'

const InspirationCard = ({ id, img, location, distance, color }) => {
	console.log(color)
	return (
		// 382 254
		<div>
			<div className={`bg-[${color}] rounded-xl`}>
				<div className='relative h-64 max-w-96 '>
					<Image src={img} layout='fill' className='rounded-t-lg ' />
				</div>
				<div className={`relative h-64 flex flex-col px-6 py-6 space-y-5 text-white`}>
					<h2>{location}</h2>
					<span>{distance}</span>
				</div>
			</div>
		</div>
	)
}

export default InspirationCard
