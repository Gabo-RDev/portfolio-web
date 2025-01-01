import { FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
	SiExpress,
	SiJavascript,
	SiMongodb,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';
import { ICON_VARIANTS } from '../utils/utils';
import { motion } from 'framer-motion';

const Techs = () => {
	return (
		<section className='pb-24'>
			<motion.h2
				className='my-20 text-center text-4xl'
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.2 }}
			>
				Technologies
			</motion.h2>
			<motion.div
				className='flex flex-wrap items-center justify-center gap-4'
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.2 }}
			>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(1.5)}
				>
					<SiJavascript className='text-6xl text-[#F7DF1E]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(2)}
				>
					<SiTypescript className='text-6xl text-[#3178C6]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(2.5)}
				>
					<RiReactjsFill className='text-7xl text-[#61DAFB]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(3)}
				>
					<SiRedux className='text-6xl text-[#764ABC]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(3.5)}
				>
					<FaNodeJs className='text-6xl text-[#339933]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(3)}
				>
					<SiExpress className='text-6xl text-[#fff]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(2.5)}
				>
					<SiMongodb className='text-5xl text-[#47A248]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(2)}
				>
					<RiTailwindCssFill className='text-6xl text-[#06B6D4]' />
				</motion.div>
				<motion.div
					className='p-4'
					initial='initial'
					animate='animate'
					variants={ICON_VARIANTS(1.5)}
				>
					<FaGitAlt className='text-6xl text-[#F05033]' />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Techs;
