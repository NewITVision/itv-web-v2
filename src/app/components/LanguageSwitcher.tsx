import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="language-switcher">
			<button
				onClick={() => changeLanguage('pl')}
				className={i18n.language === 'pl' ? 'active' : ''}
			>
				PL
			</button>
			<button
				onClick={() => changeLanguage('en')}
				className={i18n.language === 'en' ? 'active' : ''}
			>
				EN
			</button>
		</div>
	);
};