import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
	const [value, setValue] = useState(() => {
		let currentValue;

		try {
			currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue));
		} catch (error) {
			currentValue = initialValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};
