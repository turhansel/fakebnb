import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
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
					<Image
						src='/airbnb/Airbnb_Logo_Be%CC%81lo_qe23zq.svg'
						width={400}
						height={400}
						objectFit='contain'
						objectPosition='left'
						loading='lazy'
					/>
				</div>
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button
							className='bg-rose-400 text-white py-5 px-16 rounded-lg'
							onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						>
							Login with {provider.name}
						</button>
					</div>
				))}
				<button className='bg-indigo-400 text-white py-5 px-16 rounded-lg' onClick={() => router.push('/')}>
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
