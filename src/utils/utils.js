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
