import React from 'react';
import { NavigationItems } from "@config/Header";

interface NavigationProps {
	activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
	return (
		<>
			<ul style={{ position: 'fixed', top: 0, left: 0 }}>
				{NavigationItems.map((item, i) => (
					<li key={i}>
						<a href={item.path} className={activeSection === item.path ? 'active' : ''}>{item.title}</a>
					</li>
				))}
			</ul>
		</>
	)
}