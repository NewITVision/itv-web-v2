interface Tag {
	id: number;
	name: string;
	color: string;
}

export type ProjectLinks = Record<'website' | 'product' | 'description', string>;

export interface ProjectRowProps {
	id: number;
	name: string;
	description?: string;
	images: string[];
	main_image: string;
	tags: Tag[];
	links: ProjectLinks;
	price?: string;
	created_at?: string;
}
