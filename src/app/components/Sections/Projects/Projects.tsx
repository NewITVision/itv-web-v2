import React from 'react';
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@services/projects";

export const Projects: React.FC = () => {
	const { t } = useTranslation();

	const { data, isLoading } = useQuery<any[]>({
		queryKey: ['projects'],
		queryFn: getProjects
	});

	console.log(data);

	return (
		<>
			{data && data.map((project: any) => (
				<React.Fragment key={project.name}>
					{project.name}
				</React.Fragment>
			))}
		</>
	)
}