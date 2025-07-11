import React, { useState } from 'react';
import { ProjectRowProps } from '@typings/Project';
import { ImageMinus } from 'lucide-react';

export const ProjectRow: React.FC<ProjectRowProps> = ({
	id,
	name,
	description,
	images,
	main_image,
	tags,
	links,
	price,
	created_at,
}) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(true);

	return (
		<>
			<li>
				<div>
					{isLoaded ? (
						<>
							<img
								src={`${import.meta.env.VITE_APP_URL}/${main_image}`}
								alt={name}
								loading="lazy"
								onLoad={(e) => (e.currentTarget.style.display = 'block')}
								onError={() => setIsLoaded(false)}
							/>
						</>
					) : (
						<>
							<ImageMinus />
						</>
					)}
				</div>
				{name}
				{description}
			</li>
		</>
	);
};
