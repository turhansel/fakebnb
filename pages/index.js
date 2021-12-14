import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Airbnb-ish</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			{/* Banner */}
		</div>
	);
}
