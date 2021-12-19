import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'
import Main from '../components/Main'
import GiftCard from '../components/GiftCard'

export const Home = ({}) => {
	const { data: session } = useSession()
	if (!session) return <Login />
	if (session) {
		return (
			<div>
				<Head>
					<title>Airbnb-ish</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<Header page='/' />
				<div className='bg-gradient-to-r from-indigo-300 via-pink-300 to-purple-300'>
					<Banner />
					<GiftCard />
				</div>

				{/* <Main /> */}
				{/* Footer */}
			</div>
		)
	}
}

export default Home
