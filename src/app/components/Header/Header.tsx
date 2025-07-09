import React, {useEffect} from 'react';
import { useLocalStorage } from "@hooks/useLocalStorage";
import { SocialMedia } from "@app/components/Header/components/SocialMedia";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@app/components/LanguageSwitcher";

export const Header: React.FC = () => {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	// useEffect(() => {
	// 	document.documentElement.className = theme;
	// }, [theme]);

	// const toggleTheme = () => {
	// 	setTheme(theme === "light" ? "dark" : "light");
	// };

	return (
		<header>
			<Link to={'/'}>
				<img src="./images/logo.png" alt="Logo NewITVision.pl" width={128} height={128} loading="lazy" />
			</Link>
			<LanguageSwitcher />
			<SocialMedia />
		</header>
	)
}