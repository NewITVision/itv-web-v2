import React from 'react';
import { ArrowUp } from "lucide-react";
import { NavigationItems } from "@config/NavigationItems";
import { useTranslation } from "react-i18next";

interface NavigationProps {
	activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
	const { navItems } = NavigationItems();
	const { t } = useTranslation();

	return (
		<>
			<ul className="nav">
				<li>
					<a href="#" title={t('navigation.btt')}>
						<ArrowUp />
					</a>
				</li>

				{navItems.map((item, i) => (
					<li key={i}>
						<a href={item.path} className={activeSection === item.path ? 'active' : ''}>{item.title}</a>
					</li>
				))}
			</ul>
		</>
	)
}