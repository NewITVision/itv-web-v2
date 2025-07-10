import React from 'react';
import { useTranslation } from "react-i18next";

export const About: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t('hero.title')}</h1>
			<p>
				{t('hero.content')}
			</p>
		</>
	)
}