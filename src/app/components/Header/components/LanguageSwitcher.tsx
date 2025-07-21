import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	return (
		<ul className="language-switcher">
			<li
				onClick={() => i18n.changeLanguage('pl')}
				className={i18n.language === 'pl' ? 'active' : ''}
			>
				PL
			</li>
			<li
				onClick={() => i18n.changeLanguage('en')}
				className={i18n.language === 'en' ? 'active' : ''}
			>
				EN
			</li>
		</ul>
	);
};
