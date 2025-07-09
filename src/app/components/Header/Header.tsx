import React, {useEffect} from 'react';
import { useLocalStorage } from "@hooks/useLocalStorage";
import { SocialMedia } from "@app/components/Header/components/SocialMedia";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@app/components/LanguageSwitcher";
import {useTranslation} from "react-i18next";

export const Header: React.FC = () => {
	const [theme, setTheme] = useLocalStorage("theme", "dark");
	const { t } = useTranslation();

	// useEffect(() => {
	// 	document.documentElement.className = theme;
	// }, [theme]);

	// const toggleTheme = () => {
	// 	setTheme(theme === "light" ? "dark" : "light");
	// };

	return (
		<header>
			<div>
				<Link to={'/'} className="logo">
					<img src="./images/logo.png" alt="Logo NewITVision.pl" width={128} height={135} loading="lazy" />
				</Link>

				<p>{t('hero.logo_desc')}</p>
				<LanguageSwitcher />
			</div>

			{/*<SocialMedia />*/}
		</header>
	)
}