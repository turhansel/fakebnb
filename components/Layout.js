import React from 'react'
import Banner from './Banner'
import GiftCard from './GiftCard'
import Header from './Header'
import Main from './Main'

const Layout = () => {
	return (
		<>
			<Header page='/' />
			<div className='bg-gradient-to-r from-indigo-300 via-pink-300 to-purple-300'>
				<Banner />
				<GiftCard />
			</div>

			<Main />
			{/* Footer */}
		</>
	)
}

export default Layout
