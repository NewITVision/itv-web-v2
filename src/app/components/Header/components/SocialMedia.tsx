import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaItems } from "@config/Header";

export const SocialMedia: React.FC = () => {
	return (
		<>
			<ul>
				{SocialMediaItems.map((item, i) => (
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