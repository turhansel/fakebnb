import Head from 'next/head'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'
import Layout from '../components/Layout'

export const Home = ({ inspirationData }) => {
	console.log('inspirationData', inspirationData)
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

export async function getServerSideProps(context) {
	const inspirationData = await fetch(`${process.env.NEXTAUTH_URL}/api/inspiration`).then((res) => res.json())
	// const cardsData = await fetch(`${process.env.NEXTAUTH_URL}/api/cards`).then(
	// 	(res) => res.json()
	// )

	return {
		props: {
			inspirationData,
			// cardsData,
		},
	}
}

export default Home
