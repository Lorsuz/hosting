import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLanguage from '@locale/en/common.json';
import ptLanguage from '@locale/pt/common.json';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				...enLanguage
			}
		},
		pt: {
			translation: {
				...ptLanguage

			}
		}
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
});