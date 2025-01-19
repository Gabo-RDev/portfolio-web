import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between py-6'>
			<div className='flex flex-shrink-0 items-center'>
				<a
					href='/'
					aria-label='Home'
				>
					<p className='text-2xl text-white font-bold '>gabo.</p>
				</a>
			</div>
			<div className='flex items-center justify-center gap-4 text-2xl'>
				<a
					href='https://www.linkedin.com/in/imnotgabo/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'
				>
					<FaLinkedin />
				</a>
				<a
					href='https://github.com/Gabo-RDev'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'
				>
					<FaGithub />
				</a>
				<a
					href='https://www.instagram.com/itsgabo66/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
				>
					<FaInstagram />
				</a>
				<a
					href='https://x.com/It_sGabo'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Twitter'
				>
					<FaTwitter />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
