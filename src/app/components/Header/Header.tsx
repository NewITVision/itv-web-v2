import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { LanguageSwitcher } from '@components/Header/components/LanguageSwitcher';
import { SocialMedia } from '@components/Header/components/SocialMedia';

export const Header: React.FC = () => {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	const { t } = useTranslation();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			<div>
				<a href="#" className="logo">
					<img
						src="./images/logo.svg"
						alt="Logo NewITVision.pl"
						width={128}
						height={135}
						loading="lazy"
					/>
				</a>

				<p>{t('hero.logo_desc')}</p>

				<div className="theme">
					<ul>
						<li
							onClick={() => setTheme('light')}
							className={`${theme === 'light' ? 'active' : ''}`}
						>
							<Sun />
						</li>
						<li
							onClick={() => setTheme('dark')}
							className={`${theme === 'dark' ? 'active' : ''}`}
						>
							<Moon />
						</li>
					</ul>

					<LanguageSwitcher />
				</div>
			</div>

			<SocialMedia />
		</motion.header>
	);
};
