import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	return (
		<ul className="language__switcher">
			<li
				onClick={() => i18n.changeLanguage('pl')}
				className={i18n.language === 'pl' ? 'active' : ''}
			>
				<img src="./images/pl.webp" loading="lazy" width={32} height={20} />
			</li>
			<li
				onClick={() => i18n.changeLanguage('en')}
				className={i18n.language === 'en' ? 'active' : ''}
			>
				<img src="./images/en.webp" loading="lazy" width={32} height={20} />
			</li>
		</ul>
	);
};
