import { Github, Facebook, Mail } from 'lucide-react';
import { Discord } from '@icons/Icons';
import { useTranslation } from 'react-i18next';
import { HeaderItem } from '@/types/Header';

export const NavigationItems = () => {
	const { t } = useTranslation();

	const navItems: HeaderItem[] = [
		{
			title: t('navigation.about'),
			path: '#about',
		},
		{
			title: t('navigation.offer'),
			path: '#offer',
		},
		{
			title: t('navigation.projects'),
			path: '#projects',
		},
	];

	const socialItems: HeaderItem[] = [
		{
			icon: <Discord />,
			title: t('social.discord'),
			path: 'https://dc.newitvision.pl/',
		},
		{
			icon: <Github />,
			title: t('social.github'),
			path: 'https://github.com/NewITVision',
		},
		{
			icon: <Facebook />,
			title: t('social.facebook'),
			path: 'https://www.facebook.com/newitvision/',
		},
		{
			icon: <Mail />,
			title: t('social.email'),
			path: 'mailto:contact@newitvision.pl',
		},
	];

	return { navItems, socialItems };
};
