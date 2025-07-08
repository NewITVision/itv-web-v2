import React, {useEffect} from 'react';
import {useLocalStorage} from "@hooks/useLocalStorage";

export const Header: React.FC = () => {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<header>
			<button onClick={toggleTheme}>Zmień motyw</button>

			<img src="./images/logo.png" alt="Logo NewITVision.pl" width={128} height={128}/>
		</header>
	)
}