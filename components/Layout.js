import React from 'react'
import { Fade } from 'react-reveal'
import Banner from './Banner'
import GiftCard from './GiftCard'
import Header from './Header'
import InspirationCard from './InspirationCard'

const Layout = ({ inspirationData }) => {
	return (
		<>
			<Header page='/' />
			<div className='bg-gradient-to-b from-indigo-200 via-purple-200 to-white'>
				<Banner />
				<div className='container mx-auto px-8 sm:px-16 '>
					<GiftCard />
				</div>
			</div>

			<main className='max-w-[1600px] mx-auto px-8 sm:px-16 '>
				<Fade bottom>
					<section className='pt-6'>
						<h2 className='text-4xl font-semibold pt-14 pb-12'>
							Inspiration for your next trip
						</h2>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{inspirationData.map(
								({ _id, img, location, distance, color }) => (
									<InspirationCard
										key={_id}
										id={_id}
										img={img}
										location={location}
										distance={distance}
										color={color}
									/>
								)
							)}
						</div>
					</section>
				</Fade>
			</main>
			{/* Footer */}
		</>
	)
}

export default Layout
