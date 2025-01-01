import { CONTACT } from '../constants/index';

const Contact = () => {
	return (
		<footer className='border-t border-stone-900 pb-20'>
			<h2 className='my-10 text-center text-4xl'>Get in touch</h2>
			<div className='text-center tracking-tighter'>
				<p className='my-4'>{CONTACT.address}</p>
				<p className='my-4'>{CONTACT.phoneNo}</p>
				<a
					href={`mailto:${CONTACT.email}`}
					className='border-b'
				>
					{CONTACT.email}
				</a>
			</div>
		</footer>
	);
};

export default Contact;
