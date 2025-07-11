import { useState, useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export const useActiveSection = () => {
	const { scrollY } = useScroll();
	const [activeSection, setActiveSection] = useState<string>('#about');

	const aboutRef = useRef<HTMLElement>(null);
	const offerRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const sections = [
			{ id: 'projects', element: projectsRef.current },
			{ id: 'offer', element: offerRef.current },
			{ id: 'about', element: aboutRef.current },
		];

		const current = sections.find((section) => {
			if (!section.element) return false;
			const offset = section.element.offsetTop;
			return latest >= offset - 250;
		});

		if (current) {
			setActiveSection(`#${current.id}`);
		}
	});

	return { activeSection, refs: { aboutRef, offerRef, projectsRef } };
};
