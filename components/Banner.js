import Image from 'next/image'

const Banner = () => {
	return (
		<div>
			<div className='h-screen w-screen overflow-hidden '>
				<Image
					alt='mountain'
					src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639770343/mountains_drnzls.jpg'
					layout='fill'
					objectFit='cover'
					quality={100}
					priority={true}
				/>
			</div>
			<div className='flex flex-col items-center absolute sm:left-1/4 md:left-1/3 left-[12%] top-3/4  '>
				<p className='font-semibold text-white 2xl:line-height-70 sm:line-height-45 2xl:text-[50px] sm:text-[35px] text-3xl text-center sm:text-left max-w-sm-[20px]'>
					Not sure where to go? Perfect.
				</p>
				<button className=' bg-white py-2 px-4 shadow-md rounded-full my-5 font-medium active:scale-90 transition duration-150 '>
					<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#6F019C] to-[#C6017E]'>
						I'm flexible
					</span>
				</button>
			</div>
		</div>
	)
}

export default Banner
