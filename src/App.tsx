import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@app/components/Header/Header";
import './compiled/css/index.css'
import { Navigation } from "@app/components/Header/components/Navigation";
import React from "react";
import { useActiveSection } from "@hooks/useActiveSection";
import { useTranslation } from "react-i18next";

function App() {
	const queryClient = new QueryClient();
	const { activeSection, refs } = useActiveSection();
	const { t } = useTranslation();

	return (
		<>
			<div className="container">
				<Header />

				<main>
					{/*<Navigation activeSection={activeSection} />*/}

					<section id="about" ref={refs.aboutRef} style={{ height: '100vh' }}>
						<h1>{t('hero.title')}</h1>
						<p>
							{t('hero.content')}
						</p>
					</section>

					<section id="offer" ref={refs.offerRef} style={{ height: '100vh' }}>
						offer
					</section>

					<section id="projects" ref={refs.projectsRef} style={{ height: '100vh' }}>
						projects
					</section>
				</main>

				<footer></footer>
			</div>
			<QueryClientProvider client={queryClient}>
				{/*<Test />*/}
			</QueryClientProvider>
		</>
	);
}

export default App;