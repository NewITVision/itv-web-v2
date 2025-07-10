import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@app/components/Header/Header";
import { Navigation } from "@app/components/Header/components/Navigation";
import React from "react";
import { useActiveSection } from "@hooks/useActiveSection";
import { About } from "@app/components/Sections/About/About";

import './compiled/css/index.css';
import { Projects } from "@app/components/Sections/Projects/Projects";

function App() {
	const queryClient = new QueryClient();
	const { activeSection, refs } = useActiveSection();

	return (
		<>
			<div className="container">
				<Header />

				<main>
					<Navigation activeSection={activeSection} />

					<section id="about" ref={refs.aboutRef}>
						<About />
					</section>

					<QueryClientProvider client={queryClient}>
						<section id="offer" ref={refs.offerRef} style={{ height: '100vh' }}>
							<Projects />
						</section>
					</QueryClientProvider>

					<section id="projects" ref={refs.projectsRef} style={{ height: '100vh' }}>
						projects
					</section>
				</main>

				<footer></footer>
			</div>
		</>
	);
}

export default App;