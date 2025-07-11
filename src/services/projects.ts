import axios from 'axios';

export async function getProjects() {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio`);
		return response.data.data;
	} catch (error) {
		console.error(error);

		return false;
	}
}
