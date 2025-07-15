import { Header } from '@app/components/Header/Header';
import { Navigation } from '@app/components/Header/components/Navigation';
import React from 'react';
import { useActiveSection } from '@hooks/useActiveSection';
import { About } from '@app/components/Sections/About/About';
import { Projects } from '@app/components/Sections/Projects/Projects';
import { Offer } from '@app/components/Sections/Offer/Offer';
import './compiled/css/index.css';

function App() {
	const { activeSection, refs } = useActiveSection();

	return (
		<>
			<div className="container">
				<Header />

				<Navigation activeSection={activeSection} />

				<main>
					<section id="about" ref={refs.aboutRef}>
						<About />
					</section>

					<section id="offer" ref={refs.offerRef}>
						<Offer />
					</section>

					<section id="projects" ref={refs.projectsRef}>
						<Projects />
					</section>
				</main>

				<footer></footer>
			</div>
		</>
	);
}

export default App;
