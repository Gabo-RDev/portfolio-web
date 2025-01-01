import heroPic from '../assets/projects/heroPic.webp';
import { HERO_CONTENT } from '../constants/index.js';

const Hero = () => {
	return (
		<section className='pb-4 lg:mb-36'>
			<div className='flex flex-wrap lg:flex-row-reverse'>
				<div className='w-full lg:w-1/2'>
					<div className='flex justify-center lg:p-8'>
						<img
							className='border border-stone-900 rounded-3xl'
							src={heroPic}
							alt='Gabriel Rodriguez'
						/>
					</div>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col items-center lg:items-start mt-10'>
						<h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
							Gabriel Rodriguez
						</h2>
						<span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'>
							React Developer
						</span>
						<p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
							{HERO_CONTENT}
						</p>
						<a
							className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
							href='/resume.pdf'
							target='_blank'
							rel='noopener noreferrer'
							download
						>
							Download resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
