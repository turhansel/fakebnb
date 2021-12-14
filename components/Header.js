import Image from 'next/image';
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
} from '@heroicons/react/solid';
function Header() {
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
			{/* Left */}
			<div className='relative flex items-center h-10 cursor-pointer my-auto'>
				<div>
					<Image
						src='https://res.cloudinary.com/diuzwbnzu/image/upload/v1639510780/Airbnb_Logo_Be%CC%81lo_qe23zq.svg'
						layout='fill'
						objectFit='="contain'
						objectPosition='left'
					/>
				</div>
			</div>

			{/* Middle - Searchbar*/}
			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
					type='text'
					placeholder='Start your search'
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>

			{/* Right */}
			<div className='flex items-center justify-end space-x-4 text-slate-500'>
				<p className='hidden md:inline'>Become a host</p>
				<GlobeAltIcon className='h-6 cursor-pointer' />
				<div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
					<MenuIcon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>
		</header>
	);
}

export default Header;
