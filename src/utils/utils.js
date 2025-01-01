export const COINTAINER_VARIANT = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			staggerChildren: 0.4,
		},
	},
};

export const CHILD_VARIANT = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const ICON_VARIANTS = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
});
