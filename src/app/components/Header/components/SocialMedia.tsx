import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationItems} from "@config/NavigationItems";

export const SocialMedia: React.FC = () => {
	const { socialItems } = NavigationItems();

	return (
		<>
			<ul>
				{socialItems.map((item, i) => (
					<li key={i}>
						<Link to={item.path} rel="nofollow noopener noreferrer" target="_blank" title={item.title}>
							{item.icon}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}