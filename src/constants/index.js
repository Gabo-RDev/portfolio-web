import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';

export const HERO_CONTENT = `A developer with a knack for crafting robust and scalable web applications. Through various personal and academic projects, I have honed my skills in front-end technologies.`;

export const ABOUT_TEXT = `Versatile JavaScript developer with experience in React, Next.js, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. Passionate about crafting efficient and user-friendly web applications, solving complex problems, and collaborating in dynamic environments. Always learning and exploring new technologies.`;

export const PROJECTS = [
	{
		id: 1,
		title: 'Google Translate Clone',
		link: 'https://clone-google-translate.netlify.app/',
		image: project1,
		description:
			'A fully functional clone of Google Translate using React, showcasing proficiency in building scalable and interactive web applications.',
		technologies: ['HTML', 'CSS', 'React', 'Bootstrap', 'API'],
	},
	{
		id: 2,
		title: 'Todo App',
		link: 'https://todo-app-ny2yufkg8-imnotgabos-projects.vercel.app/',
		image: project2,
		description:
			'A project developed to demonstrate skills in TypeScript, React and state management.',
		technologies: ['HTML', 'CSS', 'TypeScript', 'React'],
	},
	{
		id: 3,
		title: 'Omnifood',
		link: 'https://omnifood-dr.netlify.app/',
		image: project3,
		description:
			'A modern and responsive landing page for Omnifood, a subscription-based healthy food service.',
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	/* {
		id: 4,
		title: 'Blogging Platform',
		link: '',
		image: project4,
		description:
			'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
		technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
	}, */
];

export const CONTACT = {
	address: 'Independence Avenue, Santo Domingo, DR 11005 ',
	phoneNo: '+1 (849) 763-5403',
	email: 'gabriel.duarte18@outlook.es',
};
