import { Header } from '@app/components/Header/Header';
import { Navigation } from '@app/components/Header/components/Navigation';
import React from 'react';
import { useActiveSection } from '@hooks/useActiveSection';
import { About } from '@app/components/Sections/About/About';
import { Projects } from '@app/components/Sections/Projects/Projects';
import { Offer } from '@app/components/Sections/Offer/Offer';
import './compiled/css/index.css';
import { motion } from 'framer-motion';

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
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						<About />
					</motion.section>

					<motion.section
						id="offer"
						ref={refs.offerRef}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						<Offer />
					</motion.section>

					<motion.section
						id="projects"
						ref={refs.projectsRef}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
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
