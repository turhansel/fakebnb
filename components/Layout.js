import React from 'react'
import Banner from './Banner'
import GiftCard from './GiftCard'
import Header from './Header'
import Main from './Main'

const Layout = () => {
	return (
		<>
			<Header page='/' />
			<div className='bg-gradient-to-b from-indigo-200 via-purple-300 to-white'>
				<Banner />
				<GiftCard />
			</div>
			
			<Main />
			{/* Footer */}
		</>
	)
}

export default Layout
