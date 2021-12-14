import Image from 'next/image';

function Header() {
	return (
		<header>
			{/* Left */}
			<div>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
					layout='fill'
				/>
			</div>
			{/* Middle */}
			<div> </div>
			{/* Right */}
			<div></div>
		</header>
	);
}

export default Header;
