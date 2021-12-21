import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'
import Main from '../components/Main'
import GiftCard from '../components/GiftCard'
import Layout from '../components/Layout'

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

				<Layout />
			</div>
		)
	}
}

export default Home
