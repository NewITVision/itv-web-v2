import axios from "axios";

const corsFix = 'https://cors-anywhere.herokuapp.com/'

export async function getProjects() {
	try {
		const response = await axios.get(`http://newitvision.test/api/portfolio`);
		return response.data.data;
	} catch (error) {
		console.error(error);

		return false;
	}
}