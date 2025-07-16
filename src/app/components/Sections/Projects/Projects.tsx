import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRateToUSD, getProjects } from '@services/projects';
import { Loading } from '@app/components/Loading';
import { ProjectRow } from '@app/components/Sections/Projects/ProjectRow';
import { Message } from '@app/components/Message/Message';
import { ProjectRowProps } from '@typings/Project';

export const Projects: React.FC = () => {
	const { t } = useTranslation();

	const { data, isLoading, isError } = useQuery<any[]>({
		queryKey: ['projects'],
		queryFn: getProjects,
	});

	// const sortedProjects = useMemo(() => {
	// 	if (!data) return [];
	//
	// 	return [...data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
	// }, [data]);

	const { data: usdRate } = useQuery({
		queryKey: ['rate'],
		queryFn: fetchExchangeRateToUSD,
		select: (data) => {
			if (data === false || !data?.rates?.[0]?.mid) {
				return null;
			}
			return data.rates[0].mid;
		},
	});

	return (
		<>
			<h2>{t('projects.title')}</h2>

			{isLoading && <Loading absolute={true} />}
			{isError && <Message messageType="error" messageText={t('message.is_error')} />}
			{data && data.length === 0 && (
				<Message messageType="info" messageText={t('message.not_found')} />
			)}

			<ol className="projects">
				{data &&
					data.map((project: ProjectRowProps) => (
						<ProjectRow
							key={`${project.id}-${project.name}`}
							{...project}
							usdRate={usdRate || null}
						/>
					))}
			</ol>
		</>
	);
};
