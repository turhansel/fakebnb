import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Login from '../components/Login';
import Layout from '../components/Layout';

export const Home = ({ inspirationData, discoverData }) => {
	const { data: session } = useSession();

	if (!session) return <Login />;
	if (session) {
		return (
			<div>
				<Head>
					<title>Airbnb-ish</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<Layout inspirationData={inspirationData} discoverData={discoverData} />
			</div>
		);
	}
};

export async function getServerSideProps() {
	const inspirationData = await fetch(
		`${process.env.NEXTAUTH_URL}/api/inspiration`
	).then((res) => res.json());
	const discoverData = await fetch(
		`${process.env.NEXTAUTH_URL}/api/discover`
	).then((res) => res.json());

	return {
		props: {
			inspirationData,
			discoverData,
		},
	};
}

export default Home;
