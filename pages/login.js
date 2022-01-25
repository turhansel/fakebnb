import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
function Login({ providers }) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col dark:bg-dark-300 bg-gray-300 min-h-screen w-full items-center justify-center space-y-4'>
				<div>
					<img
						className='w-52 mb-5'
						src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639510780/Airbnb_Logo_Be%CC%81lo_qe23zq.svg'
						alt='airbnb-logo'
					/>
				</div>
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button
							className='bg-rose-400 text-white p-5 rounded-lg'
							onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						>
							Login with {provider.name}
						</button>
					</div>
				))}
				<button className='bg-indigo-400 text-white p-5 rounded-lg' onClick={() => router.push('/')}>
					Login as a Visitor
				</button>
			</div>
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
