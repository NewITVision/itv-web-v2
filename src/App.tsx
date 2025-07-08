import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Test} from "@app/components/test";
import {Header} from "@app/components/Header/Header";
import './App.css'

function App() {
	const queryClient = new QueryClient();


	return (
		<>
			<div className="container">
				<Header />
			</div>
			<QueryClientProvider client={queryClient}>
				<Test />
			</QueryClientProvider>
		</>
	);
}

export default App;