// import React from 'react';
// import {useQuery} from "@tanstack/react-query";
// import {getProjects} from "../../services/projects.ts";
//
// export const Test: React.FC = () => {
// 	const { data, isLoading } = useQuery<any[]>({
// 		queryKey: ['projects'],
// 		queryFn: getProjects
// 	});
//
// 	return (
// 		<>
// 			{data && data.map((project: any) => (
// 				<React.Fragment key={project.name}>
// 					{project.name}
// 				</React.Fragment>
// 			))}
// 		</>
// 	)
// }