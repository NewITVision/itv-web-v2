import React, { useState } from 'react';
import { ProjectRowProps } from '@typings/Project';
import { ImageMinus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ProjectRow: React.FC<ProjectRowProps> = ({
	id,
	name,
	name_eng,
	description,
	description_eng,
	images,
	main_image,
	tags,
	links,
	price,
	created_at,
	usdRate,
}) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(true);
	const { i18n, t } = useTranslation();

	const usdPrice = price && usdRate ? (price / usdRate).toFixed(2) : null;

	console.log(links.website);

	return (
		<>
			<li>
				{tags && tags.length > 0 && (
					<ul className="tags">
						{tags.map((tag) => (
							<li key={tag.id}>
								<span>{tag.name}</span>
							</li>
						))}
					</ul>
				)}

				<div className="project-content">
					<div>
						{isLoaded ? (
							<>
								<img
									src={`${import.meta.env.VITE_APP_URL}/${main_image}`}
									alt={name_eng}
									loading="lazy"
									onLoad={(e) => (e.currentTarget.style.display = 'block')}
									onError={() => setIsLoaded(false)}
									width={200}
									height={100}
								/>
							</>
						) : (
							<>
								<ImageMinus />
							</>
						)}
					</div>

					<div>
						<h3>{i18n.language === 'pl' ? name : name_eng}</h3>

						<p>{i18n.language === 'pl' ? description : description_eng}</p>

						<div>
							{links && (
								<ul className="links">
									<li>
										<Link
											to={links.website}
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											{t('projects.demo')}
										</Link>
									</li>
									{links.product && (
										<li>
											<Link
												to={links.product}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="buy"
											>
												{t('projects.product', {
													amount:
														i18n.language === 'pl' ? price : usdPrice,
													currency: i18n.language === 'pl' ? 'zł' : '$',
												})}
											</Link>
										</li>
									)}
									{links.description && (
										<li>
											<Link
												to={links.description}
												target="_blank"
												rel="nofollow noopener noreferrer"
											>
												{t('projects.description')}
											</Link>
										</li>
									)}
								</ul>
							)}
						</div>
					</div>
				</div>
			</li>
		</>
	);
};
