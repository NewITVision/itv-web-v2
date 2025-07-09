import React, {useEffect} from 'react';
import {useLocalStorage} from "@hooks/useLocalStorage";
import {Navigation} from "@app/components/Header/components/Navigation";
import {SocialMedia} from "@app/components/Header/components/SocialMedia";

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
			<img src="./images/logo.png" alt="Logo NewITVision.pl" width={128} height={128} loading="lazy" />

			<SocialMedia />


		</header>
	)
}