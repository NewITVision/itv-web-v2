import { HeaderItem } from "@typings/Header";
import { Github, Facebook, Mail } from 'lucide-react';
import { Discord } from "@icons/Icons";

export const NavigationItems: HeaderItem[] = [
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Offer',
		path: '#offer',
	},
	{
		title: 'Projects',
		path: '#projects',
	}
]

export const SocialMediaItems: HeaderItem[] = [
	{
		icon: <Discord />,
		title: 'Discord',
		path: 'https://dc.newitvision.pl/',
	},
	{
		icon: <Github />,
		title: 'Github',
		path: 'https://github.com/NewITVision-pl',
	},
	{
		icon: <Facebook />,
		title: 'Facebook',
		path: 'https://www.facebook.com/newitvision/',
	},
	{
		icon: <Mail />,
		title: 'E-mail',
		path: 'mailto:contact@newitvision.pl',
	}
]