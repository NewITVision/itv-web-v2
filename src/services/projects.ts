import axios from "axios";

const corsFix = 'https://cors-anywhere.herokuapp.com/'

export async function getProjects() {
	try {
		const response = await axios.get(`${corsFix}https://newitvision.pl/works.json`);
		return response.data.items;
	} catch (error) {
		console.error(error);

		return false;
	}
}