import axios from 'axios';
import { ExchangeRateToUSD } from '@typings/Config';

export async function getProjects() {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio`);
		return response.data.data;
	} catch (error) {
		console.error(error);

		return false;
	}
}

export async function fetchExchangeRateToUSD(): Promise<ExchangeRateToUSD | false> {
	try {
		const response = await axios.get(`${import.meta.env.VITE_NBP_API}`);

		return response.data;
	} catch (error) {
		console.error(error);

		return false;
	}
}
