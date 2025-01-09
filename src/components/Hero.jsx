import heroPic from '../assets/projects/heroPic.webp';
import { HERO_CONTENT } from '../constants/index.js';
import { COINTAINER_VARIANT, CHILD_VARIANT } from '../utils/utils.js';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section className='pb-4 lg:mb-36'>
			<div className='flex flex-wrap lg:flex-row-reverse'>
				<div className='w-full lg:w-1/2'>
					<div className='flex justify-center lg:p-8'>
						<motion.img
							className='border border-stone-900 rounded-3xl'
							src={heroPic}
							alt='Gabriel Rodriguez'
							width={650}
							height={650}
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						/>
					</div>
				</div>
				<div className='w-full lg:w-1/2'>
					<motion.div
						className='flex flex-col items-center lg:items-start mt-10'
						initial='hidden'
						animate='visible'
						variants={COINTAINER_VARIANT}
					>
						<motion.h2
							className='pb-2 text-4xl tracking-tighter lg:text-8xl'
							variants={CHILD_VARIANT}
						>
							Gabriel Rodriguez
						</motion.h2>
						<motion.span
							className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'
							variants={CHILD_VARIANT}
						>
							React Developer
						</motion.span>
						<motion.p
							className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'
							variants={CHILD_VARIANT}
						>
							{HERO_CONTENT}
						</motion.p>
						<motion.a
							className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
							href='https://gabo-resume.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
							download
							variants={CHILD_VARIANT}
						>
							Download resume
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
