import { FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
	SiExpress,
	SiJavascript,
	SiMongodb,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';

const Techs = () => {
	return (
		<section className='pb-24'>
			<h2 className='my-20 text-center text-4xl'>Technologies</h2>
			<div className='flex flex-wrap items-center justify-center gap-4'>
				<div className='p-4'>
					<SiJavascript className='text-6xl text-[#F7DF1E]' />
				</div>
				<div className='p-4'>
					<SiTypescript className='text-6xl text-[#3178C6]' />
				</div>
				<div className='p-4'>
					<RiReactjsFill className='text-7xl text-[#61DAFB]' />
				</div>
				<div className='p-4'>
					<SiRedux className='text-6xl text-[#764ABC]' />
				</div>
				<div className='p-4'>
					<FaNodeJs className='text-6xl text-[#339933]' />
				</div>
				<div className='p-4'>
					<SiExpress className='text-6xl text-[#fff]' />
				</div>
				<div className='p-4'>
					<SiMongodb className='text-5xl text-[#47A248]' />
				</div>
				<div className='p-4'>
					<RiTailwindCssFill className='text-6xl text-[#06B6D4]' />
				</div>
				<div className='p-4'>
					<FaGitAlt className='text-6xl text-[#F05033]' />
				</div>
			</div>
		</section>
	);
};

export default Techs;
