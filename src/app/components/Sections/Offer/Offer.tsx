import React from 'react';
import { useTranslation } from 'react-i18next';
import OfferCards from "@shared/components/OfferCards/OfferCards";

export const Offer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2>{t('offer.title')}</h2>

			<OfferCards />
		</>
	);
};
