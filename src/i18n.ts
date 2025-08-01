import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},

		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
			// requestOptions: {
			// 	cache: 'no-cache'
			// }
		},

		detection: {
			order: ['localStorage', 'navigator', 'htmlTag'],
			caches: ['localStorage'],
			lookupLocalStorage: 'i18nextLng',
		},

		initImmediate: false,
	});

export default i18n;
