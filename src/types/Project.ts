interface Tag {
	id: number;
	name: string;
	color: string;
}

export type ProjectLinks = Record<'website' | 'product' | 'description', string>;

export interface ProjectRowProps {
	id: number;
	name: string;
	name_eng: string;
	description?: string;
	description_eng: string;
	images: string[];
	main_image: string;
	tags: Tag[];
	links: ProjectLinks;
	price?: number;
	created_at?: string;
	usdRate: number | null;
}
