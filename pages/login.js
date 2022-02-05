import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Login({ providers }) {
	const router = useRouter();

	const onClickVisitor = () => {
		router.push({ pathname: '/' });
		if (typeof window !== 'undefined') localStorage.setItem('isVisitor', true);
	};

	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col  bg-dark-300 min-h-screen items-center justify-center space-y-4'>
				<div className='md:w-full w-56 flex items-center justify-center '>
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
				<button className='bg-indigo-400 text-white py-5 px-16 rounded-lg' onClick={onClickVisitor}>
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
