import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@components/Header/Header';
import { Navigation } from '@components/Header/components/Navigation';
import { useActiveSection } from '@hooks/useActiveSection';
import { About } from '@components/Sections/About/About';
import { Offer } from '@components/Sections/Offer/Offer';
import { Projects } from '@components/Sections/Projects/Projects';
import './compiled/css/index.css';

function App() {
	const { activeSection, refs } = useActiveSection();

	return (
		<>
			<div className="container">
				<Header />

				<Navigation activeSection={activeSection} />

				<main>
					<motion.section
						id="about"
						ref={refs.aboutRef}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
					>
						<About />
					</motion.section>

					<motion.section
						id="offer"
						ref={refs.offerRef}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
					>
						<Offer />
					</motion.section>

					<motion.section
						id="projects"
						ref={refs.projectsRef}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
					>
						<Projects />
					</motion.section>
				</main>

				<footer></footer>
			</div>
		</>
	);
}

export default App;
