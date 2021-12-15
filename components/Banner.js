import Image from 'next/image';

function Banner() {
	
	return (
		<>
			<div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[6] 2xl:h-[700px]'>
				<Image
					src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639514717/Olivares-Dome_12873798_0767_ksyoir.jpg'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[6] 2xl:h-[700px]'>
				<Image
					src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639514717/Olivares-Dome_12873798_0767_ksyoir.jpg'
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</>
	);
}

export default Banner;
