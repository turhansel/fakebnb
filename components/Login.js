import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

const Login = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<Head>
				<title>Airbnb-ish</title>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>

			<div className='flex flex-col items-center'>
				<Image
					src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639510780/Airbnb_Logo_Be%CC%81lo_qe23zq.svg'
					height={300}
					width={300}
				/>
				<div
					onClick={signIn}
					className='mt-7 bg-red-400 w-60 text-white uppercase text-center rounded-xl py-2 cursor-pointer hover:bg-red-500 transition duration-200'
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default Login;
