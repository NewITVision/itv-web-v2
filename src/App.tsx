import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@app/components/Header/Header";
import './compiled/css/index.css'
import { Navigation } from "@app/components/Header/components/Navigation";
import React from "react";
import { useActiveSection } from "@hooks/useActiveSection";

function App() {
	const queryClient = new QueryClient();
	const { activeSection, refs } = useActiveSection();

	return (
		<>
			<div className="container">
				<Header />

				<div>
					<Navigation activeSection={activeSection} />

					<section id="about" ref={refs.aboutRef} style={{ height: '100vh' }}>
						about
					</section>

					<section id="offer" ref={refs.offerRef} style={{ height: '100vh' }}>
						offer
					</section>

					<section id="projects" ref={refs.projectsRef} style={{ height: '100vh' }}>
						projects
					</section>
				</div>
			</div>
			<QueryClientProvider client={queryClient}>
				{/*<Test />*/}
			</QueryClientProvider>
		</>
	);
}

export default App;